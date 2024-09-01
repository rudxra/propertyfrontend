import "@/styles/globals.css";
import React from "react";
import Layout from "@/components/Layout";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import CustomSignInButton from "@/components/CustomSignIn";
export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <StateContext>
        <Layout>
          <Toaster />
            <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ClerkProvider>
  );
}
