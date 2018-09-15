import axios from "axios";

// "http://localhost:59435"

export function listRentalCarTypesGet() {
  const url = `/api/rentalcars/cartype`;

  return axios.get(url);
}

export function createRentalLocationPost(locationObj) {
  const url = `/api/rentallocation`;

  return axios.post(url, locationObj);
}

export function listRentalLocationsGet() {
  const url = `/api/rentallocation`;

  return axios.get(url);
}

export function listRentalLocationGet(id) {
  const url = `/api/rentallocation/${id}`;

  return axios.get(url);
}

export function updateRentalLocationPut(id, locationObj) {
  const url = `/api/rentallocation/${id}`;

  return axios.put(url, locationObj);
}

export function removeRentalLocationDelete(id) {
  const url = `/api/rentallocation/${id}`;

  return axios.delete(id);
}
