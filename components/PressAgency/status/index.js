import Image from "next/image";
import React from "react";
import accept from "../../common/assets/accept.svg";
import pending from "../../common/assets/pending.svg";
import reject from "../../common/assets/reject.svg";
import Link from "next/link";
export default function Status() {
  return (
    <section className="flex flex-col justify-center w-full items-center gap-y-8 py-4">
      <h1 className="underline underline-offset-8 text-5xl font-semibold tracking-wide text-[#626362] mb-4">
        STATUS
      </h1>
      <Link href="/press-agency/status/pending">
        <Image src={pending} alt="pending" height={200} width={200} />
      </Link>
      <Link href="/press-agency/status/accept">
        <Image src={accept} alt="accept" height={200} width={200} />
      </Link>
      <Link href="/press-agency/status/reject">
        <Image src={reject} alt="reject" height={200} width={200} />
      </Link>
    </section>
  );
}
