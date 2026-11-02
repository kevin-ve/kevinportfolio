import { COURSES } from "./pricing.js";

export const SERVICES = {
  "tutoring":       { title: "Tutoring, one week", price: 5000, kind: "service" },
  "portfolio":      { title: "Portfolio",          price: 5000, kind: "service" },
  "pack-student":   { title: "Student Combo",      price: 3500, kind: "package" },
  "pack-jobseeker": { title: "Job Seeker Pack",    price: 5000, kind: "package" },
  "pack-business":  { title: "Business Bundle",    price: 8000, kind: "package" }
};

export const PRODUCTS = {};
for (const key in COURSES) {
  PRODUCTS[key] = { title: COURSES[key].title, price: COURSES[key].price, kind: "course" };
}
for (const key in SERVICES) {
  PRODUCTS[key] = SERVICES[key];
}

export function productOf(key) {
  return Object.prototype.hasOwnProperty.call(PRODUCTS, key) ? PRODUCTS[key] : null;
}

export function formatPrice(amount) {
  return amount.toLocaleString("en-US") + " RWF";
}
