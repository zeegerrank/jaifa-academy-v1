import { Outlet } from "react-router-dom";
import AppNavBar from "../components/header/app-nav-bar/AppNavBar";
import { twMerge } from "tailwind-merge";
import Logo from "../components/header/Logo";
function PageLayout() {
  return (
    <>
      <header
        className={twMerge(
          "bg z-20 bg-blue-400 transition-all duration-300",
          "flex justify-center",
          "sm:items-center sm:justify-around",
        )}
      >
        <Logo />
        <AppNavBar className="" />
      </header>
      <main className="container z-20 py-4 sm:px-16">
        <Outlet />
      </main>
    </>
  );
}

export default PageLayout;
