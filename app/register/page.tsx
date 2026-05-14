"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("注册失败：" + error.message);
    } else {
      alert("注册成功！");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h1 className="text-4xl font-black text-yellow-400 mb-3">
          PRO SPORTS
        </h1>

        <p className="text-zinc-400 mb-8">
          会员注册系统
        </p>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block mb-3 text-zinc-400">
              邮箱
            </label>

            <input
              type="email"
              placeholder="请输入邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-black border border-zinc-700 outline-none"
            />
          </div>

          <div>
            <label className="block mb-3 text-zinc-400">
              密码
            </label>

            <input
              type="password"
              placeholder="请输入密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-black border border-zinc-700 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-yellow-400 text-black font-bold"
          >
            注册账号
          </button>
        </form>
      </div>
    </main>
  );
}