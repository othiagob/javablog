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
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="max-w-[720px] mx-auto px-6 h-[56px] flex items-center justify-between">

          {/* Logo — bold, confident, Space Grotesk */}
          <Link href="/">
            <a
              className="text-[1.15rem] font-bold text-foreground hover:text-primary transition-colors duration-200 tracking-tight"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              Thiago B.
            </a>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}>
                <a className="px-3 py-1.5 text-[0.825rem] font-medium text-muted-foreground hover:text-foreground rounded transition-colors duration-150 hover:bg-secondary">
                  {label}
                </a>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-2 px-2.5 py-1 text-[0.7rem] font-semibold rounded border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-150"
              aria-label={theme === "dark" ? "Modo claro" : "Modo escuro"}
              style={{ fontFamily: "var(--font-sans)", letterSpacing: "0.04em" }}
            >
              {theme === "dark" ? "LIGHT" : "DARK"}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="px-2 py-1 text-[0.65rem] font-semibold rounded border border-border text-muted-foreground"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? "LIGHT" : "DARK"}
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
          <div className="sm:hidden border-t border-border bg-background px-6 py-2">
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
      <main className="flex-1 max-w-[720px] mx-auto w-full px-6 py-16">
        {children}
      </main>

      {/* ── Footer ─────────────────────────────── */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-[720px] mx-auto px-6 py-6 flex items-center justify-between text-[0.75rem] text-muted-foreground">
          <span className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
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
