import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}

export default function BlogLayout({ children, sidebar }: BlogLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-primary">
              <a href="/" className="hover:text-primary/80 transition-colors">
                Thiago's Java Blog
              </a>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        {/* Sidebar */}
        {sidebar && (
          <>
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 border-r border-border bg-card">
              <div className="sticky top-20 p-6">{sidebar}</div>
            </aside>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
              <aside className="md:hidden w-full border-b border-border bg-card p-6">
                {sidebar}
              </aside>
            )}
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 md:px-8">
          <article className="max-w-3xl mx-auto">{children}</article>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026 Thiago's Java Learning Blog. Built with React, TypeScript,
            and deployed on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
}
