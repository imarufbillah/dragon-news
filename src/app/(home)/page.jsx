import { redirect } from "next/navigation";

const default_category_id = "08";

export default async function Home() {
  redirect(`/category/${default_category_id}`);
}
