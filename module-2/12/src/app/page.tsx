import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>homepage</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
