// NET Academy pricing settings. Change the values marked CHANGE ME, nothing else.

export const MOMO = {
  code: "1940525",          // CHANGE ME: your MoMo code
  name: "kevin"   // CHANGE ME: the name that shows when someone pays
};

export const COURSES = {
  html: { title: "HTML course",       price: 5000, first: 1,  last: 8  },
  css:  { title: "CSS course",        price: 5000, first: 9,  last: 17 },
  js:   { title: "JavaScript course", price: 8000, first: 18, last: 27 }
};

export const FREE_LESSONS = [1, 9, 18];

export function courseOf(lessonNo) {
  for (const key in COURSES) {
    const c = COURSES[key];
    if (lessonNo >= c.first && lessonNo <= c.last) return key;
  }
  return null;
}

export function isFree(lessonNo) {
  return FREE_LESSONS.includes(lessonNo);
}

export function priceOf(courseKey) {
  return COURSES[courseKey] ? COURSES[courseKey].price : null;
}
