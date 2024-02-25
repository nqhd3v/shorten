import local from "next/font/local";

export const writer = local({
  variable: "--font-writer",
  src: [
    {
      path: "./iAWriterMonoS.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./iAWriterMonoS-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./iAWriterMonoS-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./iAWriterMonoS-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const nunito = local({
  variable: "--font-nunito",
  src: [
    {
      path: "./Nunito.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Nunito-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Nunito-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Nunito-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const ubuntu = local({
  variable: "--font-ubuntu",
  src: [
    {
      path: "./UbuntuMono.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./UbuntuMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./UbuntuMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./UbuntuMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
