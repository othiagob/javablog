import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="text-base font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
              thiago<span className="text-primary font-bold">.</span>dev
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "Tibia", href: "/category/Tibia" },
              { label: "Programação", href: "/category/Programação" },
            ].map(({ label, href }) => (
              <Link key={href} href={href}>
                <a className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition-colors">
                  {label}
                </a>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-1 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-base"
              aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors text-base"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded-md text-muted-foreground hover:bg-secondary transition-colors"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-border bg-background px-6 py-3 space-y-0.5">
            {[
              { label: "Home", href: "/" },
              { label: "Tibia", href: "/category/Tibia" },
              { label: "Programação", href: "/category/Programação" },
            ].map(({ label, href }) => (
              <Link key={href} href={href}>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition-colors"
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2026 Thiago B.</p>
          <a
            href="https://github.com/othiagob"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            github.com/othiagob
          </a>
        </div>
      </footer>
    </div>
  );
}
