import { useSettings } from "../context/SettingsContext.jsx";

function PreviewCard() {
  const { theme, language } = useSettings();
  const isDark = theme === "dark";

  const text =
    language === "en"
      ? {
          heading: "Preference Preview",
          currentTheme: "Current Theme",
          currentLanguage: "Current Language",
          light: "Light",
          dark: "Dark",
          english: "English",
          thai: "Thai",
          message: "This is your preference preview.",
        }
      : {
          heading: "ตัวอย่างการตั้งค่า",
          currentTheme: "ธีมปัจจุบัน",
          currentLanguage: "ภาษาปัจจุบัน",
          light: "สว่าง",
          dark: "มืด",
          english: "อังกฤษ",
          thai: "ไทย",
          message: "นี่คือหน้าตัวอย่างการตั้งค่า",
        };

  return (
    <section
      className={`rounded-2xl border p-6 shadow-lg ${
        isDark
          ? "border-slate-700 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <h2 className="mb-6 text-2xl font-bold">{text.heading}</h2>

      <div
        className={`flex items-center justify-between border-b py-4 ${
          isDark ? "border-slate-700" : "border-slate-200"
        }`}
      >
        <span className="opacity-70">{text.currentTheme}</span>
        <strong>{theme === "light" ? text.light : text.dark}</strong>
      </div>

      <div
        className={`flex items-center justify-between border-b py-4 ${
          isDark ? "border-slate-700" : "border-slate-200"
        }`}
      >
        <span className="opacity-70">{text.currentLanguage}</span>
        <strong>{language === "en" ? text.english : text.thai}</strong>
      </div>

      <div
        className={`mt-6 rounded-xl p-5 text-lg ${
          isDark ? "bg-slate-800" : "bg-indigo-50"
        }`}
      >
        {text.message}
      </div>
    </section>
  );
}

export default PreviewCard;
