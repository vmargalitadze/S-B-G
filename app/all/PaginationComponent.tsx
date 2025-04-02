"use client";
import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({ direction, href, isDisabled }) => {
  const router = useRouter();
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <Button
      onClick={() => router.push(href)}
      className={`bg-gray-100 text-gray-500 cursor-pointer hover:bg-gray-200 ${disabledClassName}`}
      aria-disabled={isDisabled}
      disabled={isDisabled}
    >
      {isLeft ? "«" : "»"}
    </Button>
  );
};

function PaginationComponent({ pageCount }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
        
      />
      <span className="p-2 font-semibold text-gray-500">
        გვერდი {currentPage}
      </span>
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= pageCount}
      />
    </div>
  );
}

export default PaginationComponent;
