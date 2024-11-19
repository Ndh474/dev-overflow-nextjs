interface Tag {
  _id: string;
  name: string;
  questions: number;
}

interface User {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string;
  title: string;
  description: string;
  tags: Tag[];
  author: User;
  upvotes: number;
  answers: number;
  views: number;
  createdAt: Date;
}
