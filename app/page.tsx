export default function Home() {
  const matches = [
    {
      league: "亚索",
      match: "黑桃 vs 阿逸",
      tip: "黑桃方向",
      time: "20:00",
    },
    {
      league: "you ran",
      match: "皇马 vs 塞维利亚",
      tip: "大2.5",
      time: "22:30",
    },
    {
      league: "欧冠",
      match: "拜仁 vs 巴黎",
      tip: "双方进球",
      time: "03:00",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 顶部导航 */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-wide text-yellow-400">
              PRO SPORTS
            </h1>
            <p className="text-zinc-500 text-sm">
              Professional Match Analysis
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 rounded-xl border border-zinc-700 hover:border-yellow-400 transition">
              登录
            </button>

            <button className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-bold hover:scale-105 transition">
              注册
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm mb-6">
            今日重点推荐已更新
          </div>

          <h2 className="text-6xl font-black leading-tight mb-6">
            专业体育
            <br />
            数据分析平台
          </h2>

          <p className="text-zinc-400 text-lg leading-8 mb-10">
            每日精选热门赛事分析，实时同步盘口变化与临场数据，
            提供更专业的比赛方向参考。
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-7 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition">
              查看今日推荐
            </button>

            <button className="px-7 py-4 rounded-2xl border border-zinc-700 hover:border-yellow-400 transition">
              联系客服
            </button>
          </div>
        </div>

        {/* 右侧数据卡片 */}
        <div className="space-y-5">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-zinc-500 text-sm">今日主推</p>

                <h3 className="text-3xl font-bold mt-2">
                  曼城 vs 热刺
                </h3>
              </div>

              <div className="text-4xl">⚽</div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-500">推荐方向</span>

                <span className="text-yellow-400 font-bold">
                  曼城 -1
                </span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-500">信心指数</span>

                <span>★★★★★</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">比赛时间</span>

                <span>20:00</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-500 text-sm">近7天胜率</p>

              <h3 className="text-4xl font-black mt-4 text-yellow-400">
                78%
              </h3>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-500 text-sm">VIP会员</p>

              <h3 className="text-4xl font-black mt-4">
                1.2K
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 推荐大厅 */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-yellow-400 mb-2">TODAY PICKS</p>

            <h2 className="text-4xl font-black">
              今日推荐大厅
            </h2>
          </div>

          <button className="border border-zinc-700 px-5 py-3 rounded-2xl hover:border-yellow-400 transition">
            查看全部
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {matches.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-yellow-400 transition"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">
                  {item.league}
                </span>

                <span className="text-zinc-500 text-sm">
                  {item.time}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-6">
                {item.match}
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-zinc-800 pb-3">
                  <span className="text-zinc-500">推荐</span>

                  <span className="text-yellow-400 font-bold">
                    {item.tip}
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-[1.02] transition">
                查看分析
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="border-t border-zinc-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-yellow-400 mb-4">CONTACT</p>

          <h2 className="text-5xl font-black mb-6">
            获取最新临场方案
          </h2>

          <p className="text-zinc-400 text-lg mb-10">
            推荐方案与盘口变化会实时同步，
            联系客服获取更多会员内容。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-7 py-4 rounded-2xl bg-yellow-400 text-black font-bold">
              Telegram
            </button>

            <button className="px-7 py-4 rounded-2xl border border-zinc-700">
              WhatsApp
            </button>

            <button className="px-7 py-4 rounded-2xl border border-zinc-700">
              LINE
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
