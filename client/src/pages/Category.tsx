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
        <a className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted-foreground hover:text-foreground transition-colors duration-150 mb-12">
          <ArrowLeft size={12} strokeWidth={2} />
          Todas as publicações
        </a>
      </Link>

      <header className="mb-10">
        <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-2">
          Categoria
        </p>
        <h1
          className="text-[2rem] font-bold text-foreground tracking-[-0.025em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {category}
        </h1>
        <p className="text-[0.85rem] text-muted-foreground mt-1.5">
          {categoryPosts.length} post{categoryPosts.length !== 1 ? "s" : ""}
        </p>
      </header>

      <div className="border-t border-border mb-8" />

      {categoryPosts.length > 0 ? (
        <PostList posts={categoryPosts} />
      ) : (
        <p className="text-sm text-muted-foreground text-center py-10">
          Nenhum post nesta categoria ainda.
        </p>
      )}
    </BlogLayout>
  );
}
