import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import i18n from "../../utils/i18n";

function LanguageSelection() {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  /** useTranslation is used to detect current langauage */
  useTranslation();

  return (
    <div
      className={twMerge(
        "flex w-screen justify-center",
        "border border-red-500",
      )}
    >
      <div className={twMerge("border border-red-500", "flex gap-2")}>
        <button
          className={twMerge(
            "bg-slate-900/30 p-1",
            i18n.language === "th" && "bg-green-500/50 underline",
          )}
          onClick={() => changeLanguage("th")}
        >
          <span className="fi fi-th"></span> TH
        </button>{" "}
        |{" "}
        <button
          className={twMerge(
            "bg-slate-900/30 p-1",
            i18n.language === "en" && "bg-green-500/50 underline",
          )}
          onClick={() => changeLanguage("en")}
        >
          <span className="fi fi-gb"></span> EN
        </button>
      </div>
    </div>
  );
}

export default LanguageSelection;
