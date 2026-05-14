export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-yellow-400 mb-3">
            PRO SPORTS
          </h1>

          <p className="text-zinc-400">
            会员登录系统
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-3 text-zinc-400">
              账号
            </label>

            <input
              type="text"
              placeholder="请输入账号"
              className="w-full px-5 py-4 rounded-2xl bg-black border border-zinc-700 outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-3 text-zinc-400">
              密码
            </label>

            <input
              type="password"
              placeholder="请输入密码"
              className="w-full px-5 py-4 rounded-2xl bg-black border border-zinc-700 outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-yellow-400 text-black font-black hover:scale-[1.02] transition"
          >
            登录
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-zinc-500">
            还没有账号？
          </p>

          <a
            href="/register"
            className="text-yellow-400 mt-2 inline-block"
          >
            立即注册
          </a>
        </div>
      </div>
    </main>
  );
}
