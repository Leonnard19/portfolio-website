import { locales } from './i18n/request';
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(en|pt-BR)/:path*"],
};
