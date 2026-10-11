import Link from "next/link";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1> */}
      <p className="text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button variant="outline" className="mt-6">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;