import { getToken } from "../utils/auth";

const API_URL = `${import.meta.env.VITE_API_URL}/callback`;

export interface CallbackRequest {
  name: string;
  phone: string;
  service: string;
  message?: string;
}

/* ===========================
   Create Callback (Public)
=========================== */

export async function createCallback(data: CallbackRequest) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to submit callback request");
  }

  return result;
}

/* ===========================
   Get All Callbacks (Protected)
=========================== */

export async function getCallbacks() {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch callbacks");
  }

  return result.data;
}

/* ===========================
   Delete Callback (Protected)
=========================== */

export async function deleteCallback(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to delete callback");
  }

  return result;
}

/* ===========================
   Update Callback Status (Protected)
=========================== */

export async function updateCallbackStatus(
  id: string,
  status: string
) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({
      status,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to update callback");
  }

  return result;
}