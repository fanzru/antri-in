import "tailwindcss/tailwind.css";
import MiddlewareComponent from "../components/middleware/MiddlewareComponent";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MiddlewareComponent>
        <Component {...pageProps} />
      </MiddlewareComponent>
    </>
  )
}

export default MyApp;
