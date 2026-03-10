const metrics = [
  { label: 'Open requests', value: '24' },
  { label: 'Donors on standby', value: '312' },
  { label: 'Units delivered today', value: '86' },
  { label: 'Critical alerts', value: '3' },
]

const activity = [
  { time: '15:04', detail: '6 units O- delivered to City Hospital.' },
  { time: '14:32', detail: 'New request from Patan Heart Center (A+).' },
  { time: '13:18', detail: 'Donation camp scheduled at University Drive.' },
  { time: '12:40', detail: '23 donors confirmed for B+ alert.' },
]

function Dashboard() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Command Center</p>
        <h1 className="font-display text-4xl font-semibold text-white">
          Live operations overview.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Monitor blood flow, track deliveries, and manage response teams in real time.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5"
          >
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Delivery timeline</h2>
          <div className="mt-4 space-y-3">
            {activity.map((item) => (
              <div
                key={item.time}
                className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4 text-sm text-slate-300"
              >
                <span className="text-rose-300">{item.time}</span>
                <span>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Next actions</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>Confirm courier pickup for Bir Hospital, O- units.</p>
            <p>Update donor availability for Lalitpur region.</p>
            <p>Assign volunteer teams to the Dharan drive.</p>
          </div>
          <button className="mt-6 w-full rounded-2xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-rose-400 hover:text-white">
            Open operations board
          </button>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
