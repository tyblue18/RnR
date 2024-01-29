"use client";
import { signIn } from "next-auth/react";
console.log(process.env.GITHUB_ID);

export default function Home() {
  return (
    <main>
      <h1> ahhh</h1>
      <button
        onClick={() => {
          signIn("github");
        }}
      >
        Sign in
      </button>
    </main>
  );
}
