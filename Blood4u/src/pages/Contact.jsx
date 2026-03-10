const channels = [
  { label: 'Emergency hotline', value: '+977 01 555 2026' },
  { label: 'Operations center', value: 'control@blood4u.org' },
  { label: 'Volunteer desk', value: 'volunteer@blood4u.org' },
]

function Contact() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Contact</p>
        <h1 className="font-display text-4xl font-semibold text-white">
          Stay connected with the Blood4U response team.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          We coordinate urgent requests 24/7 and help donors find the fastest routes.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Direct lines</h2>
          {channels.map((channel) => (
            <div
              key={channel.label}
              className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                {channel.label}
              </p>
              <p className="text-sm font-semibold text-white">{channel.value}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4 text-sm text-slate-300">
            Headquarters: Ward 4, Kathmandu, Nepal.
          </div>
        </div>

        <form className="space-y-4 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="Full name"
            />
            <input
              className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
              placeholder="Email address"
            />
          </div>
          <input
            className="rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
            placeholder="Subject"
          />
          <textarea
            className="min-h-[150px] w-full rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200"
            placeholder="Write your message"
          />
          <button
            type="button"
            className="rounded-2xl bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-rose-500"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
