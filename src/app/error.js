"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="font-semibold">Something went wrong!</h2>
        <button
          className="pBtn px-10 py-2 rounded-sm "
          onClick={() => router.refresh()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
