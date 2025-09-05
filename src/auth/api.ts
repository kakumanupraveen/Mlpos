import { http } from '../lib/http';

export type Me = { id?: number; login: string; name?: string; avatar_url?: string; email?: string };

export async function getMe(): Promise<Me | null> {
  try {
    const { data } = await http.get('/auth/me');
    return data || null;
  } catch {
    return null;
  }
}

export async function logout(): Promise<void> {
  try { await http.post('/auth/logout'); } catch {}
}
