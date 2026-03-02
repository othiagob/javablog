import BlogLayout from "@/components/BlogLayout";
import BlogSidebar from "@/components/BlogSidebar";
import { usePosts } from "@/hooks/usePosts";
import { Streamdown } from "streamdown";
import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

/**
 * Post Page - Individual Blog Post
 * Design Philosophy: Modernismo Tipográfico Minimalista
 * - Markdown content rendered with Streamdown
 * - Generous line-height for readability
 * - Clean typography with Playfair Display headings
 * - Forest green accents for links and highlights
 */

export default function Post() {
  const [match, params] = useRoute("/posts/:slug");
  const { posts, getPostBySlug, getCategories } = usePosts();

  if (!match) return null;

  const post = getPostBySlug(params?.slug);
  const categories = getCategories();

  if (!post) {
    return (
      <BlogLayout>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Post não encontrado
          </h1>
          <p className="text-muted-foreground mb-6">
            Desculpe, não conseguimos encontrar o post que você está procurando.
          </p>
          <Link href="/">
            <a className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Voltar para Home
            </a>
          </Link>
        </div>
      </BlogLayout>
    );
  }

  const sidebarPosts = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
  }));

  return (
    <BlogLayout
      sidebar={<BlogSidebar posts={sidebarPosts} categories={categories} />}
    >
      {/* Back Button */}
      <Link href="/">
        <a className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium">
          <ArrowLeft size={18} />
          Voltar
        </a>
      </Link>

      {/* Post Header */}
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={post.date} className="font-semibold">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded font-medium">
            {post.category}
          </span>

          <span>{post.readingTime} min de leitura</span>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-border" />
      </header>

      {/* Post Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <Streamdown>{post.content}</Streamdown>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h3 className="text-lg font-bold text-foreground mb-2">
            Sobre o autor
          </h3>
          <p className="text-foreground/70">
            Thiago é um estudante de Ciência da Computação aprendendo
            autodidatamente TypeScript, Node.js e React. Este blog documenta
            sua jornada de aprendizado em Java e outras tecnologias.
          </p>
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Posts Relacionados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts
            .filter(
              (p) => p.category === post.category && p.slug !== post.slug
            )
            .slice(0, 2)
            .map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/posts/${relatedPost.slug}`}>
                <a className="block p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {relatedPost.excerpt}
                  </p>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </BlogLayout>
  );
}
