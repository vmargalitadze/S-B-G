"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Suspense } from "react";
function Search() {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter(); // `push` ensures navigation
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    // Ensure redirection to /all if user is not already on that page
    if (pathname !== "/all") {
      push(`/all?${params.toString()}`);
    } else {
      replace(`${pathname}?${params.toString()}`);
    }
  }, 300);

  return (
    
    <div className="relative w-full bg-white rounded-md mb-8">
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString() || ""}
        className="pl-10 pr-4"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
  );
}




export default function SearchComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  );
}