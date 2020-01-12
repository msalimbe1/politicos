const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

export function dayText(ISODate) {
  return new Date(ISODate).toLocaleDateString("es-AR", options);
}

export default {
  dayText
};
