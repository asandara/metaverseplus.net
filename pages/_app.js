import "../styles/globals.css";
import Loading from "../components/loading/Loading";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SnackbarProvider } from "notistack";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <SnackbarProvider maxSnack={3}>
      <ChakraProvider>
        <div id="rooot">
          <Loading isLoading={loading} />
          {loading == false && <Component {...pageProps} />}
        </div>
      </ChakraProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
