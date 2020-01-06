import http from './httpService';

export function saveUnitHood(name) {
  return http.post(`/api/unithood`, { name });
}

export function registerEmployee(data) {
  return http.post(`/api/employee`, data);
}

export function saveBooking(data) {
  return http.post(`/api/bookings`, data);
}

export function cancelBooking(bookingId) {
  return http.delete(`/api/bookings/${bookingId}`);
}

export function getBooking(bookingId) {
  return http.get(`/api/bookings/${bookingId}`);
}

export function getFreeOffice(employeeId, overlap) {
  return http.post(`/api/offices/free/${employeeId}`, { overlap });
}

export function getEventsByEmployee(employeeId) {
  return http.get(`/api/events/employee/${employeeId}`);
}

export function getOffice(officeId) {
  return http.get(`/api/office/${officeId}`);
}
