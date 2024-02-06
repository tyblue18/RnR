"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <main>
      Restaurant Rater
      <br />
      <Link href="/login" color="blue.400" _hover={{ color: "blue.500" }}>
        Login
      </Link>
    </main>
  );
}
