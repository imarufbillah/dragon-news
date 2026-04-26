import { redirect } from "next/navigation";
import { DEFAULT_CATEGORY_ID } from "@/constants/categories";

/**
 * Home Page
 * Redirects to the default category (All News)
 */
export default async function Home() {
  redirect(`/category/${DEFAULT_CATEGORY_ID}`);
}
