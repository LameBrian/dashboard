const navItems = [
  "Overview",
  "Users",
  "Access",
  "Billing",
  "Reports",
  "Settings",
];

const stats = [
  {
    label: "Active sessions",
    value: "1,084",
    caption: "Peak usage at 2:00 PM",
    trend: "+9%",
  },
  {
    label: "Security score",
    value: "98%",
    caption: "MFA enabled across admin teams",
    trend: "+2%",
  },
  {
    label: "Avg. response",
    value: "4m 12s",
    caption: "Support SLA for priority tickets",
    trend: "-6%",
  },
];

const activity = [
  {
    title: "New user registrations",
    value: "128",
    delta: "+14%",
  },
  {
    title: "Password resets",
    value: "32",
    delta: "-5%",
  },
  {
    title: "Support tickets",
    value: "18",
    delta: "+9%",
  },
];

const tasks = [
  {
    label: "Review access requests",
    tag: "High",
    time: "Today",
  },
  {
    label: "Audit billing updates",
    tag: "Medium",
    time: "Tomorrow",
  },
  {
    label: "Schedule maintenance window",
    tag: "Low",
    time: "Friday",
  },
];

const alerts = [
  {
    title: "Identity verification",
    detail: "5 admins require ID check before Q2.",
  },
  {
    title: "System health",
    detail: "Latency spikes in EU cluster resolved.",
  },
  {
    title: "Audit trail",
    detail: "Export compliance logs by Thursday.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Admin dashboard
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Welcome back, Aaliyah
            </h1>
            <p className="mt-2 max-w-xl text-base text-slate-300">
              Securely manage your teams, monitor account health, and keep the admin
              workflow moving with a unified command center.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white">
              Export data
            </button>
            <button className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-indigo-400">
              Create report
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-xl font-semibold text-indigo-200">
                AD
              </div>
              <div>
                <p className="text-sm text-slate-400">Workspace</p>
                <p className="text-lg font-semibold text-white">Aurora Desk</p>
              </div>
            </div>
            <nav className="mt-8 flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-2 text-left text-slate-300 transition hover:border-slate-700 hover:bg-slate-800/60 hover:text-white"
                >
                  {item}
                  <span className="text-xs text-slate-500">↗</span>
                </button>
              ))}
            </nav>
            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Alerts
              </p>
              <div className="mt-4 space-y-4 text-sm text-slate-200">
                {alerts.map((alert) => (
                  <div key={alert.title} className="space-y-1">
                    <p className="font-medium text-white">{alert.title}</p>
                    <p className="text-xs text-slate-400">{alert.detail}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full rounded-xl bg-slate-800 px-3 py-2 text-sm text-white transition hover:bg-slate-700">
                Review queue
              </button>
            </div>
          </aside>

          <main className="flex flex-col gap-6">
            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Login</h2>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                    Secure access
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Invite administrators and keep every session protected.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Email
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="admin@aurora.io"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Password
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <label className="flex items-center gap-2">
                      <input
                        className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-indigo-500 focus:ring-indigo-500/50"
                        type="checkbox"
                      />
                      Remember me
                    </label>
                    <button className="text-indigo-300 hover:text-indigo-200" type="button">
                      Forgot password?
                    </button>
                  </div>
                  <button className="w-full rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                    Sign in
                  </button>
                </form>
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
                  Last login from San Francisco, CA · 2 hours ago
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Reset Password</h2>
                  <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200">
                    Send link
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Trigger secure password resets and track completion.
                </p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Account email
                    </label>
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="team@aurora.io"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Reason
                    </label>
                    <select className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30">
                      <option>Locked account</option>
                      <option>Security review</option>
                      <option>User request</option>
                    </select>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
                    Reset emails are valid for 30 minutes and include 2FA verification.
                  </div>
                  <button className="w-full rounded-2xl border border-indigo-400/60 px-4 py-3 text-sm font-semibold text-indigo-200 transition hover:border-indigo-300 hover:bg-indigo-500/10">
                    Send reset link
                  </button>
                </form>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-xs text-slate-400">
                  <span>Pending resets</span>
                  <span className="text-white">6 requests</span>
                </div>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">Dashboard</h2>
                    <p className="mt-1 text-sm text-slate-400">
                      Weekly admin KPIs and workload insights.
                    </p>
                  </div>
                  <button className="rounded-full border border-slate-700 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">
                    Last 7 days
                  </button>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {activity.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        {item.title}
                      </p>
                      <div className="mt-3 flex items-end justify-between">
                        <p className="text-2xl font-semibold text-white">{item.value}</p>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-200">
                          {item.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                    >
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="uppercase tracking-[0.2em]">{stat.label}</span>
                        <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-300">
                          {stat.trend}
                        </span>
                      </div>
                      <p className="mt-4 text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-xs text-slate-400">{stat.caption}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
                  <h3 className="text-lg font-semibold text-white">Today's tasks</h3>
                  <ul className="mt-5 space-y-4">
                    {tasks.map((task) => (
                      <li
                        key={task.label}
                        className="flex items-start justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                      >
                        <div>
                          <p className="text-sm font-medium text-white">{task.label}</p>
                          <p className="mt-1 text-xs text-slate-500">{task.time}</p>
                        </div>
                        <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                          {task.tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
                  <h3 className="text-lg font-semibold text-white">Support coverage</h3>
                  <div className="mt-4 space-y-4 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Americas</span>
                      <span className="text-white">4 admins</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>EMEA</span>
                      <span className="text-white">3 admins</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>APAC</span>
                      <span className="text-white">2 admins</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full rounded-2xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Update schedule
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
