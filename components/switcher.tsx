'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Import hooks for path and query

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname(); // Get the current pathname
  const searchParams = useSearchParams(); // Get the current search parameters

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      // Manually handle the language change in the URL path
      const newPath = `/${nextLocale}${pathname.replace(/^\/[a-zA-Z]+/, '')}`; // Replace the existing language in path
      router.replace(`${newPath}${searchParams ? `?${searchParams.toString()}` : ''}`); // Preserve query params
    });
  };

  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en' className='text-black'>En</option>
        <option value='ge' className='text-black'>Ka</option>
      </select>
    </label>
  );
}
