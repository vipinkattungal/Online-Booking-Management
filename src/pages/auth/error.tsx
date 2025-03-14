// filepath: c:\Users\pc\Documents\GitHub\Online-Booking-Management\src\pages\auth\error.tsx
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const router = useRouter();
  const { error } = router.query;

  const errorMessages: { [key: string]: string } = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have permission to sign in.",
    Verification: "The sign-in link is no longer valid.",
    Default: "Unable to sign in.",
  };

  const errorMessage = errorMessages[error as string] || errorMessages.Default;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Error</h1>
      <p className="mb-4">{errorMessage}</p>
      <Link href="/">
        Go back to sign up
      </Link>
    </div>
  );
};

export default ErrorPage;