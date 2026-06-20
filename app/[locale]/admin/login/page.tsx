"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, password }),
      });

      if (!response.ok) {
        setError("მომხმარებელი ან პაროლი არასწორია");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("შესვლა ვერ მოხერხდა. სცადეთ თავიდან.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-lg bg-[#203e72] p-8 text-white shadow-lg">
        <h1 className="mb-2 text-center text-2xl font-semibold">Admin Login</h1>
        <p className="mb-6 text-center text-sm text-white/80">
          შეიყვანეთ ადმინისტრაციის მონაცემები
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="user" className="text-sm font-medium">
              ელ. ფოსტა
            </label>
            <Input
              id="user"
              type="email"
              autoComplete="username"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              className="bg-white text-black"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              პაროლი
            </label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="bg-white text-black"
              required
            />
          </div>

          {error ? <p className="text-sm text-red-200">{error}</p> : null}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-[#203e72] hover:bg-white/90"
          >
            {loading ? "იტვირთება..." : "შესვლა"}
          </Button>
        </form>
      </div>
  );
}
