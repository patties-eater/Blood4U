const donors = [
  {
    name: 'Anita Shrestha',
    type: 'O+',
    distance: '1.2 km',
    status: 'Available now',
  },
  {
    name: 'Prakash Rai',
    type: 'A-',
    distance: '3.4 km',
    status: 'Ready in 2 hrs',
  },
  {
    name: 'Sita Gurung',
    type: 'B+',
    distance: '5.1 km',
    status: 'Available now',
  },
  {
    name: 'Mohit Basnet',
    type: 'AB+',
    distance: '7.9 km',
    status: 'On standby',
  },
]

function FindDonors() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col gap-4 rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Donor Search</p>
        <h1 className="font-display text-4xl font-semibold text-white">
          Find compatible donors near you.
        </h1>
        <p className="text-slate-300">
          Filter by blood group, distance, and availability to activate the closest donors.
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          <input
            className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
            placeholder="City or area"
          />
          <select className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
            <option>All blood types</option>
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
          <select className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
            <option>Within 10 km</option>
            <option>Within 5 km</option>
            <option>Within 25 km</option>
            <option>Anywhere</option>
          </select>
          <button className="rounded-2xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500">
            Search donors
          </button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {donors.map((donor) => (
            <div
              key={donor.name}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-lg font-semibold text-white">{donor.name}</p>
                <p className="text-sm text-slate-400">{donor.status}</p>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-300">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  {donor.type}
                </span>
                <span>{donor.distance}</span>
              </div>
              <button className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-rose-400 hover:text-white">
                Notify
              </button>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Coverage Map</p>
          <div className="mt-5 h-64 rounded-2xl border border-dashed border-slate-700/70 bg-slate-950/40">
            <div className="flex h-full items-center justify-center text-sm text-slate-500">
              Map view placeholder
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p>Active donors online: 214</p>
            <p>Average response time: 14 minutes</p>
            <p>Nearby hospitals: 6</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FindDonors
