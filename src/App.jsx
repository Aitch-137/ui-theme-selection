import Header from "./components/Header.jsx";
import SettingsPanel from "./components/SettingsPanel.jsx";
import PreviewCard from "./components/PreviewCard.jsx";
import { useSettings } from "./context/SettingsContext.jsx";

function App() {
  const { theme } = useSettings();

  const isDark = theme === "dark";

  return (
    <main
      className={`min-h-screen px-4 py-10 transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 text-slate-100"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <Header />

        <div className="grid gap-6 md:grid-cols-2">
          <SettingsPanel />
          <PreviewCard />
        </div>
      </div>
    </main>
  );
}

export default App;
