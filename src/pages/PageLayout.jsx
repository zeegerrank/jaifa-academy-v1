import { Outlet } from "react-router-dom";
import AppNavBar from "../components/header/app-nav-bar/AppNavBar";
import { twMerge } from "tailwind-merge";
import Logo from "../components/header/Logo";
function PageLayout() {
  return (
    <>
      <header
        className={twMerge(
          "z-20 bg-prime-100 transition-all duration-300",
          "flex justify-center",
          "sm:items-center sm:justify-around",
        )}
      >
        <Logo />
        <AppNavBar className="" />
      </header>
      <main className="container z-20 py-5">
        <Outlet />
      </main>
    </>
  );
}

export default PageLayout;
