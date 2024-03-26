"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [value, setValue] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (language: string) => {
    const newPath = pathname.replace(/^\/(en|pt)/, `/${language}`);
    router.push(newPath);
  };

  useEffect(() => {
    setValue(pathname);
    console.log("path", pathname);
  }, [pathname]);
  return (
    <select
      className="bg-[transparent] text-[#47E18E]"
      onChange={(e) => switchLanguage(e.target.value)}
    >
      <option value={"en"} className="text-black" selected={value == "/en"}>
        EN
      </option>
      <option value={"pt"} className="text-black" selected={value == "/pt"}>
        PT
      </option>
    </select>
  );
};

export default LanguageSwitcher;
