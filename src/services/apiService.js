import http from "./httpService";

export function getInputs() {
  return http.get(`/api/inputs/`);
}

export function saveUnitHood(name) {
  return http.post(`/api/unithood`, { name });
}

export function cancelBooking(bookingId) {
  return http.delete(`/api/bookings/${bookingId}`);
}

export function getBooking(bookingId) {
  return http.get(`/api/bookings/${bookingId}`);
}
