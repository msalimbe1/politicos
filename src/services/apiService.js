import http from "./httpService";

export function getQuotes() {
  return http.get(`/api/quotes/`);
}


// export function saveUnitHood(name) {
//   return http.post(`/api/unithood`, { name });
// }

// export function cancelBooking(bookingId) {
//   return http.delete(`/api/bookings/${bookingId}`);
// }

// export function getBooking(bookingId) {
//   return http.get(`/api/bookings/${bookingId}`);
// }
