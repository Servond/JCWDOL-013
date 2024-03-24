import React from "react";

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>Hello</h1>
      {children}
    </div>
  );
}
