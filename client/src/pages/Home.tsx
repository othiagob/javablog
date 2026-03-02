import BlogLayout from "@/components/BlogLayout";
import PostList from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";

export default function Home() {
  const { posts } = usePosts();

  return (
    <BlogLayout>

      {/* ── Hero — PostHog scale, bold & direct ── */}
      <section className="pb-16 pt-2">
        <h1
          className="text-[3rem] sm:text-[4rem] md:text-[4.75rem] font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-7"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Olá, sou<br />
          <span className="text-primary">Thiago.</span>
        </h1>

        <p className="text-[1.0625rem] text-muted-foreground leading-[1.75] max-w-[520px]">
          Desenvolvedor em formação. Aqui escrevo sobre o que estou
          aprendendo em programação — e sobre minhas aventuras em{" "}
          <span className="text-foreground font-medium">Tibia</span>.
          Um diário de bordo, aberto ao mundo.
        </p>

        <div className="mt-7 flex items-center gap-4">
          <a
            href="https://github.com/othiagob"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.8rem] font-semibold px-4 py-2 rounded border border-border text-foreground hover:bg-secondary hover:border-foreground/20 transition-all duration-150"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* ── Posts ──────────────────────────────── */}
      <section>
        <div className="flex items-center gap-4 mb-2">
          <h2
            className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-muted-foreground"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Publicações
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="text-sm text-muted-foreground text-center py-10">
            Nenhum post ainda. Em breve.
          </p>
        )}
      </section>

    </BlogLayout>
  );
}
