import { courseOf, isFree } from "./pricing.js";

export async function getOwnedCourses(sb, userId) {
  const { data, error } = await sb
    .from("entitlements")
    .select("course")
    .eq("user_id", userId);
  if (error) throw error;
  return new Set((data || []).map(row => row.course));
}

export function decide(lessonNo, owned) {
  const course = courseOf(lessonNo);
  if (!course) return { allowed: false, course: null, reason: "unknown" };
  if (isFree(lessonNo)) return { allowed: true, course, reason: "free" };
  if (owned.has(course)) return { allowed: true, course, reason: "owned" };
  return { allowed: false, course, reason: "locked" };
}

export async function checkAccess(sb, userId, lessonNo) {
  if (isFree(lessonNo)) return decide(lessonNo, new Set());
  try {
    const owned = await getOwnedCourses(sb, userId);
    return decide(lessonNo, owned);
  } catch (e) {
    return { allowed: false, course: courseOf(lessonNo), reason: "error" };
  }
}
