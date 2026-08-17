import { useSettings } from "../context/SettingsContext.jsx";

function Header() {
  const { language } = useSettings();

  const text =
    language === "en"
      ? {
          eyebrow: "UI Preferences",
          title: "Welcome",
          subtitle: "Choose your preferred theme and language.",
        }
      : {
          eyebrow: "การตั้งค่าหน้าจอ",
          title: "ยินดีต้อนรับ",
          subtitle: "เลือกธีมและภาษาที่คุณต้องการ",
        };

  return (
    <header className="mb-8">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-indigo-500">
        {text.eyebrow}
      </p>

      <h1 className="mb-3 text-4xl font-bold md:text-5xl">
        {text.title}
      </h1>

      <p className="text-lg opacity-70">
        {text.subtitle}
      </p>
    </header>
  );
}

export default Header;
