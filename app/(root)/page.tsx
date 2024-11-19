import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React", questions: 100 },
      { _id: "2", name: "JavaScript", questions: 200 },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "/images/GoldenDuck.png",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React", questions: 100 },
      { _id: "2", name: "JavaScript", questions: 200 },
    ],
    author: {
      _id: "2",
      name: "John Doe",
      image: "/images/GoldenDuck.png",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

const Home = async (props: { searchParams?: Promise<{ query?: string }> }) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query?.toLowerCase() || "";
  const filterQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query)
  );
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 font-space-grotesk">
          All Questions
        </h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch imgSrc={"/icons/search.svg"} placeholder="Search..." />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filterQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
