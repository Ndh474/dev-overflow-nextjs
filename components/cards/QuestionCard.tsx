import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";

import TagCard from "./TagCard";
import Metric from "../Metric";
const QuestionCard = ({ question }: { question: Question }) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:p-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(question.createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(question._id)}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {question.title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {question.tags.map((tag: Tag) => (
          <TagCard key={tag._id} tag={tag} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imageUrl={question.author.image}
          alt={question.author.name}
          value={question.author.name}
          title={`• asked ${getTimeStamp(question.createdAt)}`}
          href={ROUTES.PROFILE(question.author._id)}
          textStyles={"body-medium text-dark400_light700"}
          isAuthor
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imageUrl={"/icons/like.svg"}
            alt={"like"}
            value={question.upvotes}
            title={"Up vote"}
            textStyles={"small-medium text-dark400_light800"}
          />
          <Metric
            imageUrl={"/icons/message.svg"}
            alt={"answers"}
            value={question.answers}
            title={"Answers"}
            textStyles={"small-medium text-dark400_light800"}
          />
          <Metric
            imageUrl={"/icons/eye.svg"}
            alt={"views"}
            value={question.views}
            title={"Views"}
            textStyles={"small-medium text-dark400_light800"}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
