"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "../ui/input";

interface Props {
  imgSrc: string;
  placeholder: string;
  otherClassess?: string;
}

const LocalSearch = ({ imgSrc, placeholder, otherClassess }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") || ""
  );

  const setSearchParam = useDebouncedCallback((searchValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set("query", searchValue);
    } else {
      params.delete("query");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, 500);

  function handleSearch(searchValue: string) {
    setSearchQuery(searchValue);
    setSearchParam(searchValue);
  }
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClassess}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search"
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
