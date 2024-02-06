"use client";
import { signIn } from "next-auth/react";
import LoginAuth from "@/components/loginAuth";

export default function Home() {
  return (
    <main>
      <h1> Restaurant Rater </h1>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
      >
        Sign in
      </button> */}
      <LoginAuth
        provider="GitHub"
        onClick={() => {
          signIn("github");
        }}
        color="whiteAlpha"
        altText="Github Icon"
      />

      <LoginAuth
        provider="Google"
        onClick={() => {
          signIn("gmail");
        }}
        color="gray"
        altText="Google Icon"
      />
      <style jsx>{`
        main {
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </main>
  );
}
