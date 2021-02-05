// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getData(url: string, token: string | null) {
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  if (!response.ok) {
    await Promise.reject(response.status);
  }
  return await response.json();
}

export function getToken(name: string) {
  return localStorage.getItem(name);
}

export function setToken(name: string, value: string) {
  localStorage.setItem(name, value);
}
