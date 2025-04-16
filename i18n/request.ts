/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import fs from 'fs/promises';
import path from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const localeDir = path.join(process.cwd(), 'messages', locale);
  const messages: Record<string, any> = {};

  try {
    const files = await fs.readdir(localeDir);

    for (const file of files) {
      if (file.endsWith('.json')) {
        const key = path.basename(file, '.json');
        const filePath = path.join(localeDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        messages[key] = JSON.parse(content);
      }
    }
  } catch (err) {
    console.log(err);
    console.warn(`🔶 Locale files not found for "${locale}" at ${localeDir}`);
   
  }

  return {
    locale,
    messages,
  };
});
