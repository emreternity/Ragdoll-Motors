import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import FooterFunct from "./components/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterFunct />
    </>
  );
}

export default RootLayout;
