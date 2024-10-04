import { Outlet } from "react-router-dom";
import AppNavBar from "../components/header/app-nav-bar/AppNavBar";
import { twMerge } from "tailwind-merge";
import Logo from "../components/header/Logo";
import useDetectScroll from "../hooks/useDetectScroll";
import ButtonTopScroll from "../components/utils/ButtonTopScroll";
import Footer from "../components/Footer";

function PageLayout() {
  const { scrollDirection, scrollPosition } = useDetectScroll();

  return (
    <>
      <header
        className={twMerge(
          "z-30 bg-prime-100 transition-all duration-300",
          "flex flex-col items-center justify-center",
          "sm:flex-col sm:items-center",
          "transition-all duration-500",
          scrollDirection === "up" &&
            scrollPosition > 150 &&
            "sticky top-0 bg-prime-100/90",
          scrollDirection === "down" &&
            scrollPosition > 150 &&
            "sticky -top-full bg-prime-100/90",
        )}
      >
        <Logo />
        <AppNavBar />
      </header>
      <main className={twMerge("relative z-20")}>
        <Outlet />

        <ButtonTopScroll />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PageLayout;
