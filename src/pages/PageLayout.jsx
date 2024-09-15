import { Outlet } from "react-router-dom";
import AppNavBar from "../components/app-nav-bar/AppNavBar";
import { twMerge } from "tailwind-merge";
import Logo from "../components/Logo";
function PageLayout() {
  return (
    <>
      <header
        className={twMerge(
          "bg-blue-400 transition-all duration-300",
          "flex justify-center",
          "sm:items-center sm:justify-around",
        )}
      >
        <Logo />
        <AppNavBar className="" />
      </header>
      <main className="container px-24">
        <Outlet />
      </main>
    </>
  );
}

export default PageLayout;
