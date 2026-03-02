import BlogLayout from "@/components/BlogLayout";
import PostList from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";
import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Category() {
  const [match, params] = useRoute("/category/:category");
  const { getPostsByCategory } = usePosts();

  if (!match) return null;

  const category = params?.category ?? "";
  const categoryPosts = getPostsByCategory(category);

  return (
    <BlogLayout>
      <Link href="/">
        <a className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft size={13} />
          Todos os posts
        </a>
      </Link>

      <header className="mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
          Categoria
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold text-foreground mb-2"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          {category}
        </h1>
        <p className="text-sm text-muted-foreground">
          {categoryPosts.length} post{categoryPosts.length !== 1 ? "s" : ""}
        </p>
      </header>

      <div className="border-t border-border mb-8" />

      {categoryPosts.length > 0 ? (
        <PostList posts={categoryPosts} />
      ) : (
        <p className="text-muted-foreground text-center py-12 text-sm">
          Nenhum post nesta categoria ainda.
        </p>
      )}
    </BlogLayout>
  );
}
