import { useEffect, useState } from "react";
import { getMe, logout } from "../auth/api";

export default function Success() {
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState<Awaited<ReturnType<typeof getMe>> | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const u = await getMe();
        if (!mounted) return;
        if (!u) {
          // not authenticated – go back to login
          window.location.href = "/";
          return;
        }
        setMe(u);
      } catch {
        window.location.href = "/";
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen grid place-items-center bg-slate-50">
        <div className="text-slate-600">Loading…</div>
      </main>
    );
  }

  if (!me) return null;

  return (
    <main className="min-h-screen grid place-items-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow w-[420px] grid gap-3 text-center">
        {/* Optional avatar if your API returns avatar_url */}
        {("avatar_url" in me && me.avatar_url) ? (
          <img
            src={(me as any).avatar_url}
            alt="avatar"
            className="w-16 h-16 rounded-full mx-auto mb-2"
          />
        ) : null}

        <h1 className="text-2xl font-bold">Login success 🎉</h1>
        <p className="text-slate-600">
          Welcome <span className="font-medium">{(me as any).name || (me as any).login}</span>
        </p>

        <button
          onClick={async () => {
            await logout();
            window.location.href = "/";
          }}
          className="mx-auto rounded-xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
        >
          Sign out
        </button>
      </div>
    </main>
  );
}