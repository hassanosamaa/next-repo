"use client";

import { useMemo } from "react";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { useLocale } from "next-intl";
import arEG from "antd/locale/ar_EG";
import enUS from "antd/locale/en_US";
import { makeStore } from "@/store";

export function Providers({ children }: { children: React.ReactNode }) {
  const store = useMemo(() => makeStore(), []);
  const locale = useLocale();

  // Get Ant Design locale based on current locale
  const antdLocale = locale === 'ar' ? arEG : enUS;

  // Determine direction for Ant Design
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <Provider store={store}>
      <ConfigProvider
        locale={antdLocale}
        direction={direction}
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#1677ff",
            borderRadius: 6,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </Provider>
  );
}

