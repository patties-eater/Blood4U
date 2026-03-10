function RequestBlood() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-300">Emergency Desk</p>
        <h1 className="font-display text-4xl font-semibold text-white">
          Create an urgent blood request.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Requests are broadcast to verified donors and partner hospitals within minutes.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="Patient name"
            />
            <input
              className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="Hospital / clinic"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <select className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
              <option>Blood type</option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            <input
              className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="Units needed"
            />
            <select className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
              <option>Urgency</option>
              <option>Critical (0-2 hrs)</option>
              <option>Urgent (2-6 hrs)</option>
              <option>Scheduled (same day)</option>
            </select>
          </div>
          <textarea
            className="min-h-[140px] w-full rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
            placeholder="Notes for donors (ward, entry, contact, additional details)"
          />
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="Primary contact number"
            />
            <input
              className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="Secondary contact number"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-2xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500"
          >
            Broadcast emergency request
          </button>
        </form>

        <aside className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Response checklist</h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p>Confirm patient ID and blood group with lab results.</p>
            <p>Keep a dedicated staff member available to receive donors.</p>
            <p>Prepare cross-matching kits and notify the blood bank.</p>
            <p>Share alternate hospital locations for faster routing.</p>
          </div>
          <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-100">
            Emergency line: +977 01 555 2026
          </div>
        </aside>
      </section>
    </div>
  )
}

export default RequestBlood
