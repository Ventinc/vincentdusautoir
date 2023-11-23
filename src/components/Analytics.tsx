import Script from "next/script";

export const Analytics = () => {
  return (
    <Script
      async
      defer
      data-website-id="277d9524-3bf1-4ae1-958a-85690c325cfd"
      src="https://analytics.vincentdusautoir.com/script.js"
      data-do-not-track="true"
      data-domains="vincentdusautoir.com"
    />
  );
};
