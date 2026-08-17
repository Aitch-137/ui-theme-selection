import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext(null);

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

function loadSettings() {
  try {
    const savedSettings = localStorage.getItem("app-settings");

    if (!savedSettings) {
      return DEFAULT_SETTINGS;
    }

    const parsedSettings = JSON.parse(savedSettings);

    return {
      theme:
        parsedSettings.theme === "dark" || parsedSettings.theme === "light"
          ? parsedSettings.theme
          : DEFAULT_SETTINGS.theme,
      language:
        parsedSettings.language === "th" || parsedSettings.language === "en"
          ? parsedSettings.language
          : DEFAULT_SETTINGS.language,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings);

  function setTheme(theme) {
    setSettings((currentSettings) => ({
      ...currentSettings,
      theme,
    }));
  }

  function setLanguage(language) {
    setSettings((currentSettings) => ({
      ...currentSettings,
      language,
    }));
  }

  function resetSettings() {
    setSettings(DEFAULT_SETTINGS);
  }

  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider
      value={{
        theme: settings.theme,
        language: settings.language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }

  return context;
}
