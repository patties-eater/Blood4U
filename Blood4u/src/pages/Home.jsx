const stats = [
  { label: 'Active donors', value: '18,240' },
  { label: 'Hospitals connected', value: '126' },
  { label: 'Avg response time', value: '12 min' },
  { label: 'Camps scheduled', value: '48' },
]

const features = [
  {
    title: 'Rapid Match',
    description: 'AI-assisted matching pairs requests with nearby eligible donors.',
  },
  {
    title: 'Live Inventory',
    description: 'Track hospital stock levels and shortage alerts in real time.',
  },
  {
    title: 'Campaign Studio',
    description: 'Plan donation drives with automated reminders and turnout analytics.',
  },
]

const steps = [
  { title: 'Post a request', detail: 'Hospitals submit blood type, units, and urgency.' },
  { title: 'Alert donors', detail: 'We ping the nearest compatible donors instantly.' },
  { title: 'Track delivery', detail: 'Live confirmations from donor to hospital.' },
]

const urgentRequests = [
  { hospital: 'Bir Hospital', type: 'O-', units: 4, location: 'Kathmandu' },
  { hospital: 'Patan Heart Center', type: 'A+', units: 6, location: 'Lalitpur' },
  { hospital: 'BPKIHS', type: 'B-', units: 3, location: 'Dharan' },
]

function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-rose-200">
            National Blood Coordination Platform
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Every minute counts. Connect blood donors to patients in minutes.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            Blood4U orchestrates urgent requests, donor availability, and hospital inventory
            with a single command center.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500">
              Find donors now
            </button>
            <button className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
              Schedule a donation
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4"
              >
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Live feed</p>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200">
              Online now
            </span>
          </div>
          <div className="space-y-4">
            {urgentRequests.map((req) => (
              <div
                key={`${req.hospital}-${req.type}`}
                className="flex items-center justify-between rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4"
              >
                <div>
                  <p className="text-sm text-slate-400">{req.hospital}</p>
                  <p className="text-lg font-semibold text-white">
                    {req.type} · {req.units} units
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {req.location}
                  </p>
                </div>
                <button className="rounded-full border border-rose-500/60 px-4 py-2 text-xs font-semibold text-rose-200 transition hover:border-rose-400 hover:text-white">
                  Assign donors
                </button>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-rose-500/20 via-transparent to-sky-500/20 p-6">
            <p className="text-sm text-slate-300">Next coordinated pickup</p>
            <p className="text-2xl font-semibold text-white">6:45 PM · City Hospital</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Courier en route</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-lg"
          >
            <h3 className="font-display text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-slate-300">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">How it works</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white">
            A calm, coordinated workflow for emergencies.
          </h2>
          <p className="mt-3 text-slate-300">
            We bring hospitals, NGOs, and donors into one synchronized network.
          </p>
        </div>
        <div className="grid gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
