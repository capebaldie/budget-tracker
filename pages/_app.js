import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { BudgetProvider } from "../contexts/BudgetContexts";

function MyApp({ Component, pageProps }) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <BudgetProvider>
          <Component {...pageProps} />
        </BudgetProvider>
      )}
    </>
  );
}

export default MyApp;
