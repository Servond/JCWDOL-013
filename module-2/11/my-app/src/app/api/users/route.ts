import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
// export const revalidate = 5;

export async function GET() {
  try {
    const rawResponse = await fetch("http://localhost:3000/users", {
      //   cache: "no-store",
      next: {
        revalidate: 600,
        tags: ["users"],
      },
    });
    const response = await rawResponse.json();

    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}

export async function POST(request: Request) {
  try {
    const req = await request.json();

    const rawResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: req.name }),
    });
    const response = await rawResponse.json();
    revalidateTag("users");
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}
