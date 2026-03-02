import BlogLayout from "@/components/BlogLayout";
import { usePosts } from "@/hooks/usePosts";
import { Streamdown } from "streamdown";
import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const CATEGORY_STYLES: Record<string, string> = {
  Tibia: "bg-amber-500/15 text-amber-400",
  Programação: "bg-violet-500/15 text-violet-400",
  Fundamentos: "bg-sky-500/15 text-sky-400",
  Java: "bg-orange-500/15 text-orange-400",
};

function categoryStyle(cat: string) {
  return CATEGORY_STYLES[cat] ?? "bg-secondary text-muted-foreground";
}

export default function Post() {
  const [match, params] = useRoute("/posts/:slug");
  const { posts, getPostBySlug } = usePosts();

  if (!match) return null;

  const post = getPostBySlug(params?.slug);

  if (!post) {
    return (
      <BlogLayout>
        <div className="text-center py-20">
          <p className="text-muted-foreground text-sm mb-6">Post não encontrado.</p>
          <Link href="/">
            <a className="text-sm text-primary hover:underline">← Voltar para home</a>
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
      {/* Back link */}
      <Link href="/">
        <a className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft size={13} />
          Todos os posts
        </a>
      </Link>

      {/* Post header */}
      <header className="mb-10">
        <div className="flex items-center flex-wrap gap-2.5 mb-4">
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryStyle(post.category)}`}
          >
            {post.category}
          </span>
          <time className="text-xs text-muted-foreground">
            {new Date(post.date + "T12:00:00").toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-xs text-muted-foreground">
            {post.readingTime} min de leitura
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-base text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </header>

      <div className="border-t border-border mb-10" />

      {/* Post content */}
      <div className="prose-content">
        <Streamdown>{post.content}</Streamdown>
      </div>

      {/* Author card */}
      <div className="mt-14 pt-8 border-t border-border">
        <div className="flex items-start gap-4">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 border border-primary/30">
            T
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Thiago B.</p>
            <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
              Desenvolvedor em formação, estudante de programação e explorador
              de Tibia. Este blog é meu diário de aprendizado.
            </p>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
            Posts relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/posts/${rp.slug}`}>
                <a className="group block p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {rp.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
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
