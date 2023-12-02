import "./App.css";
import ThemeToggle from "./themeToggle";
import React from "react";
import AdminPage from "./pages/adminPage";

export default function App() {
  return (
    <main>
      <ThemeToggle />
      <AdminPage/>
    </main>
  );
}
