export const tokenKey = 'um.token';
export const guestKey = 'sk.key';

export type Progress = {
  progressionId: number;
  bestTime: number;
  prevBest: number;
  isBestTime: boolean;
};

export type GuestProp = {
  guestTime: number;
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

export function saveGuest(guestInfo): GuestProp | void {
  localStorage.setItem(guestKey, JSON.stringify(guestInfo));
}

export function readGuest(): GuestProp | undefined {
  const token = localStorage.getItem(guestKey);
  if (!token) return undefined;
  return JSON.parse(token);
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
