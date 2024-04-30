export const tokenKey = 'um.token';

export type Progress = {
  progressionId: number;
  bestTime: number;
  prevBest: number;
  isBestTime: boolean;
};

export function saveToken(token: string | undefined): void {
  if (token) {
    sessionStorage.setItem(tokenKey, token);
  } else {
    sessionStorage.removeItem(tokenKey);
  }
}

export function readToken(): string {
  const token = sessionStorage.getItem(tokenKey);
  if (!token) throw new Error('No token found');
  return token;
}

export async function readProgress(): Promise<Progress> {
  const req = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
  };
  const res = await fetch('/api/progression', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function insertProgress(progress: Progress): Promise<Progress> {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
    body: JSON.stringify(progress),
  };
  const res = await fetch('/api/progression', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function updateProgress(time: number): Promise<Progress> {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
    body: JSON.stringify({ time }),
  };
  const res = await fetch('/api/progression', req);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
