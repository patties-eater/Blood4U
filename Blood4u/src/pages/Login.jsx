import { useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
  const navigate = useNavigate()

  const handleLogin = () => {
    onLogin?.()
    navigate('/', { replace: true })
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Secure Access</p>
        <h1 className="font-display text-4xl font-semibold text-white">
          Sign in to manage donor operations.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Hospitals, NGOs, and volunteers use a single dashboard to coordinate urgent requests.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <form className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Email address</label>
            <input
              type="email"
              className="w-full rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="name@hospital.org"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Password</label>
            <input
              type="password"
              className="w-full rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="••••••••"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-700" />
              Remember me
            </label>
            <button type="button" className="text-rose-200 hover:text-white">
              Forgot password?
            </button>
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full rounded-2xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500"
          >
            Sign in
          </button>
          <div className="rounded-2xl border border-slate-800/60 bg-slate-950/50 p-4 text-sm text-slate-300">
            New partner? Request access through the Blood4U onboarding team.
          </div>
        </form>

        <div className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Access levels</h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>Hospital Command: create and track emergency requests.</p>
            <p>Volunteer Lead: coordinate donor check-ins and transport.</p>
            <p>Blood Bank: update inventory and allocation status.</p>
          </div>
          <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
            Need urgent help? Call +977 01 555 2026.
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
