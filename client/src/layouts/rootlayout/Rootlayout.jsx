import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./rootlayout.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Make sure you have added it in the .env file.");
}
 
const queryClient = new QueryClient()
function Rootlayout() {

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     <QueryClientProvider client={queryClient}>
      <div className="rootlayout">
        <header>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Lama Ai Logo" />
            <span>Lama Ai</span>
          </Link>
          <div className="user">
         
      <SignedIn>
        <UserButton />
      </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
}

export default Rootlayout;
