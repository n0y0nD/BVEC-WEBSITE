const formatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export function formatDate(iso) {
  return formatter.format(new Date(`${iso}T00:00:00+05:30`));
}

export function dateParts(iso) {
  const d = new Date(`${iso}T00:00:00+05:30`);
  return {
    day: d.toLocaleString("en-IN", { day: "2-digit", timeZone: "Asia/Kolkata" }),
    month: d.toLocaleString("en-IN", { month: "short", timeZone: "Asia/Kolkata" }),
  };
}

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
