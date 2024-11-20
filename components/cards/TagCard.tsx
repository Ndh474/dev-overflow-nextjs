import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";
import { getDeviconClassName } from "@/lib/utils";

import { Badge } from "../ui/badge";

const TagCard = ({
  tag,
  showCount,
  // compact,
}: {
  tag: Tag;
  showCount?: boolean;
  compact?: boolean;
}) => {
  const iconClass = getDeviconClassName(tag.name);
  return (
    <Link href={ROUTES.TAGS(tag._id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{tag.name}</span>
        </div>
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{tag.questions}</p>
      )}
    </Link>
  );
};

export default TagCard;
