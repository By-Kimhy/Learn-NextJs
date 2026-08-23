import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
}
