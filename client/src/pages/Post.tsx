import BlogLayout from "@/components/BlogLayout";
import { usePosts } from "@/hooks/usePosts";
import { Streamdown } from "streamdown";
import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Post() {
  const [match, params] = useRoute("/posts/:slug");
  const { posts, getPostBySlug } = usePosts();

  if (!match) return null;

  const post = getPostBySlug(params?.slug);

  if (!post) {
    return (
      <BlogLayout>
        <div className="py-20 text-center">
          <p className="text-sm text-muted-foreground mb-5">Post não encontrado.</p>
          <Link href="/">
            <a className="text-sm text-primary hover:underline underline-offset-3">
              ← Voltar
            </a>
          </Link>
        </div>
      </BlogLayout>
    );
  }

  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  return (
    <BlogLayout>

      {/* ── Back ────────────────────────────────── */}
      <Link href="/">
        <a className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 mb-10">
          <ArrowLeft size={12} strokeWidth={2.5} />
          Todas as publicações
        </a>
      </Link>

      {/* ── Post header ────────────────────────── */}
      <header className="mb-10">
        {/* Tags & meta */}
        <div className="flex items-center flex-wrap gap-2.5 mb-6">
          <span className="cat-badge" data-cat={post.category}>
            {post.category}
          </span>
          <time className="text-[0.73rem] text-muted-foreground tabular-nums">
            {formatDate(post.date)}
          </time>
          <span className="text-[0.73rem] text-muted-foreground">
            · {post.readingTime} min de leitura
          </span>
        </div>

        {/* Title — large and confident */}
        <h1
          className="text-[2.25rem] sm:text-[2.875rem] font-bold text-foreground leading-[1.1] tracking-[-0.025em] mb-5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h1>

        {/* Excerpt / lead */}
        {post.excerpt && (
          <p className="text-[1.0625rem] text-muted-foreground leading-[1.7] border-l-2 border-border pl-4">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* Divider */}
      <div className="border-t border-border mb-10" />

      {/* ── Content ────────────────────────────── */}
      <div className="prose-content">
        <Streamdown>{post.content}</Streamdown>
      </div>

      {/* ── Author card ────────────────────────── */}
      <div className="mt-14 pt-8 border-t border-border">
        <div className="flex items-start gap-4">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[0.875rem] font-bold"
            style={{
              background: "color-mix(in srgb, var(--primary) 12%, transparent)",
              color: "var(--primary)",
              border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)",
              fontFamily: "var(--font-display)",
            }}
          >
            T
          </div>
          <div>
            <p
              className="text-[0.875rem] font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
            >
              Thiago B.
            </p>
            <p className="text-[0.825rem] text-muted-foreground mt-0.5 leading-relaxed">
              Desenvolvedor em formação, estudante de programação e explorador de Tibia.
              Este blog é meu diário de aprendizado.
            </p>
          </div>
        </div>
      </div>

      {/* ── Related ────────────────────────────── */}
      {related.length > 0 && (
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-4">
            <p className="text-[0.7rem] font-bold tracking-[0.1em] uppercase text-muted-foreground"
               style={{ fontFamily: "var(--font-sans)" }}>
              Mais desta categoria
            </p>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/posts/${rp.slug}`}>
                <a className="group block p-4 rounded border border-border hover:border-primary/40 transition-all duration-200">
                  <p
                    className="text-[0.9rem] font-bold text-foreground group-hover:text-primary transition-colors duration-150 leading-snug"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                  >
                    {rp.title}
                  </p>
                  <p className="text-[0.775rem] text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                    {rp.excerpt}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}

    </BlogLayout>
  );
}
