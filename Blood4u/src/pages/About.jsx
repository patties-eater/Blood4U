const values = [
  {
    title: 'Humanity First',
    detail: 'Every interaction prioritizes patient safety, empathy, and dignity.',
  },
  {
    title: 'Transparency',
    detail: 'Live dashboards show where every unit travels and who benefits.',
  },
  {
    title: 'Community Trust',
    detail: 'We partner with verified NGOs and hospitals across the nation.',
  },
]

function About() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/50 p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Our mission</p>
        <h1 className="font-display text-4xl font-semibold text-white">
          Building the most trusted blood network in Nepal.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Blood4U brings together hospitals, volunteers, and civic partners to make
          sure no patient waits for a lifesaving transfusion.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6"
          >
            <h2 className="font-display text-2xl font-semibold text-white">{value.title}</h2>
            <p className="mt-3 text-slate-300">{value.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Impact to date</p>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>48,000+ donation notifications coordinated.</p>
            <p>1,150 partner hospitals onboarded.</p>
            <p>Average emergency response time cut by 32%.</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Partners</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {['Nepal Red Cross', 'Bir Hospital', 'WHO Nepal', 'Local Youth Clubs'].map(
              (partner) => (
                <div
                  key={partner}
                  className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-3 text-sm text-slate-300"
                >
                  {partner}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
