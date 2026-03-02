import BlogLayout from "@/components/BlogLayout";
import BlogSidebar from "@/components/BlogSidebar";
import PostList from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";

/**
 * Home Page - Blog Homepage
 * Design Philosophy: Modernismo Tipográfico Minimalista
 * - Clean typography hierarchy
 * - Generous whitespace
 * - Forest green accent color (#2D5016)
 * - Focus on content readability
 */

export default function Home() {
  const { posts, getCategories } = usePosts();
  const categories = getCategories();

  const sidebarPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
  }));

  return (
    <BlogLayout
      sidebar={<BlogSidebar posts={sidebarPosts} categories={categories} />}
    >
      {/* Hero Section */}
      <div className="mb-12 py-8">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663115818978/iNpyRBAXjkMjt3TC6MMs6g/java-hero-banner-FRMb2vj7yufTahUtx33WwU.webp"
          alt="Java Learning Banner"
          className="w-full rounded-lg mb-8 shadow-sm"
        />

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Aprendendo Java
        </h1>

        <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
          Documentando minha jornada de aprendizado em Java. Compartilhando
          conceitos fundamentais, padrões de design, e boas práticas enquanto
          exploro o ecossistema Java.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#posts"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Ler Posts
          </a>
          <a
            href="https://github.com/othiagob"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-border" />

      {/* Posts Section */}
      <section id="posts">
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Últimos Posts
        </h2>

        {posts.length > 0 ? (
          <PostList posts={posts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Nenhum post publicado ainda. Volte em breve!
            </p>
          </div>
        )}
      </section>
    </BlogLayout>
  );
}
