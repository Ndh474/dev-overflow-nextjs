const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMUNITY: "/community",
  COLLECTION: "/collection",
  JOBS: "/find-jobs",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS: (id?: string) => (id ? `/tags/${id}` : "/tags"),
};

export default ROUTES;
