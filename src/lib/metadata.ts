import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(
  pageKey: string,
  locale: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t(`${pageKey}.title`),
    description: t(`${pageKey}.description`),
    icons: {
      icon: "/favicon.ico",
    },
  };
}
