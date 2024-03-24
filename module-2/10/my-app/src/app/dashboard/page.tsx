"use client";
import Image from "next/image";
import { useState } from "react";
import { Suspense } from "react";

import Loading from "./loading";
import Error from "./error";

export default function Dashboard() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>You click {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Suspense fallback={<Loading />}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </Suspense>
    </div>
  );
}
