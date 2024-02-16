"use client";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const iconMap = {
  GitHub: <FaGithub />,
  Google: <FaGoogle />,
};

export default function LoginAuth({ provider, onClick, color, altText }) {
  return (
    <div>
      <Button
        colorScheme={color}
        leftIcon={iconMap[provider]}
        onClick={onClick}
      >
        Login with {provider}
      </Button>
    </div>
  );
}
