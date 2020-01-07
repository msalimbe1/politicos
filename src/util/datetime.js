export function dayText(ISODate) {
  return new Date(ISODate).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

export default {
  dayText
};
