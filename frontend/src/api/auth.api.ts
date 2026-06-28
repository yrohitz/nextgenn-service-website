const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

export interface LoginRequest {
  username: string;
  password: string;
}

export async function login(data: LoginRequest) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}