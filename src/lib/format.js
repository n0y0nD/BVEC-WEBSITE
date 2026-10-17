const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Dates are stored as "YYYY-MM-DD" strings, so they are read directly
// instead of through Date (which would depend on the server's time zone).
export function dateParts(iso) {
  const [year, month, day] = iso.split("-");
  return { day, month: MONTHS[Number(month) - 1], year };
}

export function formatDate(iso) {
  const { day, month, year } = dateParts(iso);
  return `${Number(day)} ${month} ${year}`;
}

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
