import { Arsenal } from "next/font/google";

export const arsenal = Arsenal({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const arsenal_bold_italic = Arsenal({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});
