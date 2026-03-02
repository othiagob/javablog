import BlogLayout from "@/components/BlogLayout";
import PostList from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";

export default function Home() {
  const { posts } = usePosts();

  return (
    <BlogLayout>
      {/* Hero */}
      <section className="pt-6 pb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Blog pessoal
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-5"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
        >
          Olá, sou{" "}
          <span className="text-primary">Thiago</span>.
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
          Desenvolvedorr em formação. Escrevo sobre programação —
          e sobre minhas aventuras por{" "}
          <span className="text-foreground font-medium">Tibia</span>.
        </p>

        <div className="mt-7 flex items-center gap-5 text-sm">
          <a
            href="https://github.com/othiagob"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border mb-10" />

      {/* Posts section */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-7">
          Publicações
        </h2>

        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <p className="text-muted-foreground text-center py-12 text-sm">
            Nenhum post ainda. Em breve!
          </p>
        )}
      </section>
    </BlogLayout>
  );
}
