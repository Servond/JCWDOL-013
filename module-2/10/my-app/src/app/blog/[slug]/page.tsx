"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const dynamic = "auto";
export const dynamicParams = true;

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();
  return (
    <div>
      <div>My Post: {params.slug}</div>
      <Link href="/">Home</Link>
      <button onClick={() => router.push("/dashboard")}>Dashboard</button>
    </div>
  );
}
