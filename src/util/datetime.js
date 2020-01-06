export function reminderTitle(booking) {
  const { from, until } = booking;
  const fromDate = new Date(from);
  const untilDate = new Date(until);
  const now = new Date();
  const today = fromDate.getDate() === now.getDate();
  let shift = 'a la mañana';
  if (fromDate.getHours() === 14) shift = 'a la tarde';
  if (fromDate.getHours() === 9 && untilDate.getHours() === 18)
    shift = 'todo el día';

  return `${today ? 'Hoy, ' : 'Mañana, '}${shift}`;
}

export function dayText(booking) {
  let fromDate = new Date(booking.from);
  fromDate = fromDate.getDate();
  let nowDate = new Date();
  nowDate = nowDate.getDate();
  if (fromDate === nowDate) return 'hoy';
  if (fromDate - nowDate === 1) return 'mañana';
  return 'dentro de poco';
}

export function date(booking) {
  const from = new Date(booking.from);
  const dd = from.getDate();
  const mm = from.getMonth() + 1;
  return `${dd}/${mm}`;
}

export function from(booking) {
  const from = new Date(booking.from).getHours();
  return from.toString();
}

export function until(booking) {
  const until = new Date(booking.until).getHours();
  return until.toString();
}

export const dias = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
];

export const setShift = {
  morning: booking => {
    booking.from.setHours(9, 0, 0, 0);
    booking.until.setHours(13, 0, 0, 0);
  },
  afternoon: booking => {
    booking.from.setHours(14, 0, 0, 0);
    booking.until.setHours(18, 0, 0, 0);
  },
  'all-day': booking => {
    booking.from.setHours(9, 0, 0, 0);
    booking.until.setHours(18, 0, 0, 0);
  }
};

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const setDay = {
  today: booking => {
    booking.from.setTime(Date.now());
    booking.until.setTime(Date.now());
  },
  tomorrow: booking => {
    booking.from.setTime(booking.from.getTime() + DAY_IN_MS);
    booking.until.setTime(booking.until.getTime() + DAY_IN_MS);
  }
};

export default {
  setShift,
  setDay,
  dias
};
