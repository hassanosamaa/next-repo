"use client";

import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setLang } from "@/store/reducers/utilitiesSlice";
import { setAuthData, logout } from "@/store/reducers/authUserSlice";
import { Button, Space, Typography } from "antd";

const { Title, Text } = Typography;

export function TestRedux() {
  const t = useTranslations('test');
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.utilitiesSlice);
  const { user, isAuthenticated } = useAppSelector((state) => state.authUserSlice);

  const handleSetLanguage = (language: string) => {
    dispatch(setLang(language));
  };

  const handleLogin = () => {
    dispatch(
      setAuthData({
        token: "test-token-123",
        user: {
          id: "1",
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          userName: "johndoe",
        },
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: "24px" }}>
      <Title level={3}>{t('reduxStore')}</Title>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Text strong>{t('currentLanguage')} </Text>
          <Text>{lang || t('notSet')}</Text>
          <br />
          <Space style={{ marginTop: "8px" }}>
            <Button onClick={() => handleSetLanguage("en")}>{t('setEnglish')}</Button>
            <Button onClick={() => handleSetLanguage("ar")}>{t('setArabic')}</Button>
            <Button onClick={() => dispatch(setLang(null))}>{t('clearLanguage')}</Button>
          </Space>
        </div>

        <div>
          <Text strong>{t('authenticationStatus')} </Text>
          <Text>{isAuthenticated ? t('authenticated') : t('notAuthenticated')}</Text>
          {user && (
            <div style={{ marginTop: "8px" }}>
              <Text>{t('user')} {user.firstName} {user.lastName} ({user.email})</Text>
            </div>
          )}
          <br />
          <Space style={{ marginTop: "8px" }}>
            <Button type="primary" onClick={handleLogin} disabled={isAuthenticated}>
              {t('mockLogin')}
            </Button>
            <Button danger onClick={handleLogout} disabled={!isAuthenticated}>
              {t('logout')}
            </Button>
          </Space>
        </div>
      </Space>
    </div>
  );
}

