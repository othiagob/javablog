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
        <a className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted-foreground hover:text-foreground transition-colors duration-150 mb-12">
          <ArrowLeft size={12} strokeWidth={2} />
          Todas as publicações
        </a>
      </Link>

      {/* ── Post header ────────────────────────── */}
      <header className="mb-10">
        {/* Tags & meta */}
        <div className="flex items-center flex-wrap gap-2.5 mb-5">
          <span className="cat-badge" data-cat={post.category}>
            {post.category}
          </span>
          <time className="text-[0.75rem] text-muted-foreground tabular-nums">
            {formatDate(post.date)}
          </time>
          <span className="text-[0.75rem] text-muted-foreground">
            {post.readingTime} min de leitura
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[2rem] sm:text-[2.4rem] font-bold text-foreground leading-[1.18] tracking-[-0.025em] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-[1rem] text-muted-foreground leading-[1.7]">
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

      {/* ── Author ─────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="flex items-start gap-3.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[0.75rem] font-semibold"
            style={{
              background: "rgba(196,160,90,0.12)",
              color: "var(--primary)",
              border: "1px solid rgba(196,160,90,0.2)",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
            }}
          >
            T
          </div>
          <div>
            <p
              className="text-[0.85rem] font-semibold text-foreground"
              style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
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
          <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-4">
            Mais desta categoria
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/posts/${rp.slug}`}>
                <a className="group block p-4 rounded border border-border hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-200">
                  <p className="text-[0.875rem] font-semibold text-foreground group-hover:text-primary transition-colors duration-150 leading-snug">
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
