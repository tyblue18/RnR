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
        imgSrc="/github_logo.png"
        altText="Github Logo"
      />

      <LoginAuth
        provider="Gmail"
        onClick={() => {
          signIn("gmail");
        }}
        imgSrc="/gmail_logo.jpeg"
        altText="Gmail Logo"
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
