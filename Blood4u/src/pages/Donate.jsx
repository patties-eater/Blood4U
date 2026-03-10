const eligibility = [
  'Age 18-60 and at least 50 kg body weight.',
  'No major surgery or illness in the last 6 months.',
  'Hemoglobin within healthy range.',
  'A good night of sleep before donation.',
]

const drives = [
  { name: 'City Square Camp', date: 'Mar 14, 2026', slots: '32 slots open' },
  { name: 'University Drive', date: 'Mar 20, 2026', slots: '18 slots open' },
  { name: 'Community Hub', date: 'Mar 28, 2026', slots: '24 slots open' },
]

function Donate() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Become a donor</p>
        <h1 className="font-display text-4xl font-semibold text-white">
          Donate blood, save three lives.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Register your availability, track your donation history, and get alerts when
          your blood type is needed.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Eligibility</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {eligibility.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Upcoming drives</h2>
          {drives.map((drive) => (
            <div
              key={drive.name}
              className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4"
            >
              <p className="text-lg font-semibold text-white">{drive.name}</p>
              <p className="text-sm text-slate-300">{drive.date}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                {drive.slots}
              </p>
            </div>
          ))}
          <button className="rounded-2xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500">
            Reserve a slot
          </button>
        </div>
      </section>
    </div>
  )
}

export default Donate
