"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from "@chakra-ui/next-js";
import { signIn } from "next-auth/react";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      Restaurant Rater
      <br />
      {/* <Link href="/login" color="blue.400" _hover={{ color: "blue.500" }}>
        Login
      </Link> */}
      <Button
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </Button>
    </main>
  );
}
