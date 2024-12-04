import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col gap-2 justify-center items-center">
      <h2>Page Not Found</h2>
      <Link href="/" className="underline underline-themep">
        Return Home
      </Link>
    </div>
  );
}
