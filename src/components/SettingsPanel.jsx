import { useSettings } from "../context/SettingsContext.jsx";

function SettingsPanel() {
  const {
    theme,
    language,
    setTheme,
    setLanguage,
    resetSettings,
  } = useSettings();

  const isDark = theme === "dark";

  const text =
    language === "en"
      ? {
          heading: "Settings",
          theme: "Theme",
          light: "Light",
          dark: "Dark",
          language: "Language",
          english: "English",
          thai: "Thai",
          reset: "Reset Settings",
        }
      : {
          heading: "การตั้งค่า",
          theme: "ธีม",
          light: "สว่าง",
          dark: "มืด",
          language: "ภาษา",
          english: "อังกฤษ",
          thai: "ไทย",
          reset: "รีเซ็ตการตั้งค่า",
        };

  const cardClass = isDark
    ? "border-slate-700 bg-slate-900"
    : "border-slate-200 bg-white";

  const normalButtonClass = isDark
    ? "border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700"
    : "border-slate-300 bg-white text-slate-800 hover:bg-slate-50";

  return (
    <section className={`rounded-2xl border p-6 shadow-lg ${cardClass}`}>
      <h2 className="mb-6 text-2xl font-bold">{text.heading}</h2>

      <div className="mb-6">
        <p className="mb-3 font-semibold opacity-70">{text.theme}</p>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`rounded-lg border px-4 py-3 font-semibold transition ${
              theme === "light"
                ? "border-indigo-600 bg-indigo-600 text-white"
                : normalButtonClass
            }`}
          >
            {text.light}
          </button>

          <button
            type="button"
            onClick={() => setTheme("dark")}
            className={`rounded-lg border px-4 py-3 font-semibold transition ${
              theme === "dark"
                ? "border-indigo-600 bg-indigo-600 text-white"
                : normalButtonClass
            }`}
          >
            {text.dark}
          </button>
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-3 font-semibold opacity-70">{text.language}</p>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-lg border px-4 py-3 font-semibold transition ${
              language === "en"
                ? "border-indigo-600 bg-indigo-600 text-white"
                : normalButtonClass
            }`}
          >
            EN - {text.english}
          </button>

          <button
            type="button"
            onClick={() => setLanguage("th")}
            className={`rounded-lg border px-4 py-3 font-semibold transition ${
              language === "th"
                ? "border-indigo-600 bg-indigo-600 text-white"
                : normalButtonClass
            }`}
          >
            TH - {text.thai}
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={resetSettings}
        className={`w-full rounded-lg border px-4 py-3 font-semibold transition ${
          isDark
            ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
            : "border-slate-300 bg-slate-100 hover:bg-slate-200"
        }`}
      >
        {text.reset}
      </button>
    </section>
  );
}

export default SettingsPanel;
