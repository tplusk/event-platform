export default function ThemeToggle() {
  const toggleTheme = () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  };
  return <button onClick={toggleTheme}>Dark/Light</button>;
}
