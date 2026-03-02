import BlogLayout from "@/components/BlogLayout";
import BlogSidebar from "@/components/BlogSidebar";
import PostList from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";
import { useRoute } from "wouter";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Category Page - Posts filtered by category
 * Design Philosophy: Modernismo Tipográfico Minimalista
 */

export default function Category() {
  const [match, params] = useRoute("/category/:category");
  const { posts, getPostsByCategory, getCategories } = usePosts();

  if (!match) return null;

  const category = params?.category;
  const categoryPosts = getPostsByCategory(category);
  const categories = getCategories();

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

      {/* Category Header */}
      <header className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          {category}
        </h1>
        <p className="text-xl text-foreground/70">
          {categoryPosts.length} post{categoryPosts.length !== 1 ? "s" : ""} nesta
          categoria
        </p>
      </header>

      {/* Divider */}
      <div className="mb-12 border-t border-border" />

      {/* Posts */}
      {categoryPosts.length > 0 ? (
        <PostList posts={categoryPosts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum post encontrado nesta categoria.
          </p>
        </div>
      )}
    </BlogLayout>
  );
}
