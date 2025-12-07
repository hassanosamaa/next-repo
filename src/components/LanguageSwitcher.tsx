"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Replace the locale in the pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <Space>
      <GlobalOutlined style={{ fontSize: '18px' }} />
      <Button
        type={locale === 'en' ? 'primary' : 'default'}
        size="small"
        onClick={() => switchLanguage('en')}
      >
        English
      </Button>
      <Button
        type={locale === 'ar' ? 'primary' : 'default'}
        size="small"
        onClick={() => switchLanguage('ar')}
      >
        العربية
      </Button>
    </Space>
  );
}

