"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  size: "small" | "large";
};

export default function Logo({ size }: Props) {
  return (
    <>
      {size === "small" ? (
        <Link href="/">
          <Image
            src="/images/logo-devlinks-large.svg"
            width={146}
            height={32}
            alt="logo"
          />
        </Link>
      ) : (
        <Image
          src="/images/logo-devlinks-large.svg"
          width={182}
          height={40}
          alt="logo"
        />
      )}
    </>
  );
}
