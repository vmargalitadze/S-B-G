/* eslint-disable @typescript-eslint/no-explicit-any */


import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import fs from 'fs/promises';
import path from 'path';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure valid locale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const localeDir = path.join(process.cwd(), 'messages', locale);
  const files = await fs.readdir(localeDir);

  const messages: Record<string, any> = {};

  for (const file of files) {
    if (file.endsWith('.json')) {
      const key = path.basename(file, '.json'); // e.g., 'about', 'nav'
      const filePath = path.join(localeDir, file);

      // Use fs.readFile to read the JSON file content
      const content = await fs.readFile(filePath, 'utf-8');

      // Parse the JSON content and store it in the messages object
      messages[key] = JSON.parse(content);
    }
  }

  return {
    locale,
    messages
  };
});
