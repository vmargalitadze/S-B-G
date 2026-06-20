export const ADMIN_COOKIE_NAME = "admin_session";

export function getAdminSessionToken(): string {
  const secret =
    process.env.JWT_SECRET ??
    process.env.BASIC_AUTH_PASSWORD ??
    process.env.ADMIN_PASSWORD ??
    "";

  return `sb-admin-${secret}`;
}

export function isValidAdminCredentials(user: string, password: string): boolean {
  const validUser = process.env.BASIC_AUTH_USER ?? "";
  const validPassword = process.env.BASIC_AUTH_PASSWORD ?? "";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "";

  if (!validUser || !password) {
    return false;
  }

  return (
    user === validUser &&
    (password === validPassword ||
      (!!adminPassword && password === adminPassword))
  );
}

export function isAdminAuthenticated(sessionValue?: string): boolean {
  return sessionValue === getAdminSessionToken();
}
