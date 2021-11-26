import "tailwindcss/tailwind.css";
import { Provider } from 'react-redux'
import ToastNotification from "../components/notification/ToastNotification";
import { GlobalStore } from "../redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={  GlobalStore  }>
        <ToastNotification />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp;
