import "@/styles/globals.css"; // Adjust this import if needed
import type { AppProps } from "next/app";
import { montserrat } from "@/lib/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
