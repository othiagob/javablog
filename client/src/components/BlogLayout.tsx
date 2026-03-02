import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tibia", href: "/category/Tibia" },
  { label: "Programação", href: "/category/Programação" },
];

export default function BlogLayout({ children }: BlogLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      {/* ── Header ─────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="max-w-[680px] mx-auto px-6 h-[52px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <a
              className="text-[1.05rem] text-foreground hover:text-primary transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            >
              Thiago B.
            </a>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                <a className="px-3 py-1.5 text-[0.8rem] font-medium text-muted-foreground hover:text-foreground rounded transition-colors duration-150 hover:bg-secondary">
                  {label}
                </a>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-1.5 p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-150"
              aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
            >
              <span className="text-[0.85rem] leading-none">{theme === "dark" ? "○" : "●"}</span>
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex sm:hidden items-center gap-0.5">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded text-muted-foreground hover:bg-secondary transition-colors"
              aria-label="Alternar tema"
            >
              <span className="text-[0.85rem] leading-none">{theme === "dark" ? "○" : "●"}</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 rounded text-muted-foreground hover:bg-secondary transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden border-t border-border bg-background px-6 py-2 space-y-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                <a
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded hover:bg-secondary transition-colors"
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ── Main ───────────────────────────────── */}
      <main className="flex-1 max-w-[680px] mx-auto w-full px-6 py-14">
        {children}
      </main>

      {/* ── Footer ─────────────────────────────── */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-[680px] mx-auto px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
            Thiago B.
          </span>
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
