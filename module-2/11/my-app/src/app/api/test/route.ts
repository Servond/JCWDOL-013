import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";
import { revalidateTag } from "next/cache";

export async function GET() {
  const res = await fetch(
    `${process.env.CONTENTFUL_URL}/entries?${process.env.CONTENTFUL_API_TOKEN}`,
    {
      next: {
        revalidate: 5,
      },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const req = await request.json();
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: req.name }),
  });

  const responseJson = await response.json();
  revalidateTag("users");
  return NextResponse.json(responseJson);
}
