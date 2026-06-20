import { cookies } from "next/headers";
import {
  ADMIN_COOKIE_NAME,
  getAdminSessionToken,
  isValidAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const user = typeof body?.user === "string" ? body.user.trim() : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!isValidAdminCredentials(user, password)) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, getAdminSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return Response.json({ success: true });
}
