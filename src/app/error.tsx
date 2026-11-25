"use client";

import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

export default function ErrorPage(props: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      <h1>Something went wrong</h1>

      <Button onClick={() => props.retry()}>Try again</Button>
    </div>
  );
}
