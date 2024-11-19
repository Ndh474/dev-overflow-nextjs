"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const filters = ["newest", "popular", "unanswered", "recommend"];

const HomeFilter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [active, setActive] = useState(searchParams.get("filter") || "");

  const setFilterParam = (filterValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (filterValue) {
      params.set("filter", filterValue);
    } else {
      params.delete("filter");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  function handleFilter(filterValue: string) {
    if (active === filterValue) {
      setActive("");
      setFilterParam("");
    } else {
      setActive(filterValue);
      setFilterParam(filterValue);
    }
  }
  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((item) => (
        <Button
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
            active === item
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          key={item}
          onClick={() => handleFilter(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
