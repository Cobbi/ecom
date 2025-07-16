import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
