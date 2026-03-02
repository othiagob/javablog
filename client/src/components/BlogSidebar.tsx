import { Link } from "wouter";

export interface SidebarPost {
  slug: string;
  title: string;
  category: string;
}

interface BlogSidebarProps {
  posts: SidebarPost[];
  categories: string[];
}

export default function BlogSidebar({ posts, categories }: BlogSidebarProps) {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          <Link href="/">
            <a className="block px-3 py-2 rounded-md hover:bg-primary/10 text-primary font-medium transition-colors">
              All Posts
            </a>
          </Link>
          {categories.map((category) => (
            <Link key={category} href={`/category/${category}`}>
              <a className="block px-3 py-2 rounded-md hover:bg-primary/10 text-foreground/70 hover:text-primary transition-colors">
                {category}
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Recent Posts</h3>
        <div className="space-y-3">
          {posts.slice(0, 5).map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <a className="block p-2 rounded-md hover:bg-primary/10 transition-colors group">
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {post.category}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
        <h3 className="text-lg font-bold text-foreground mb-2">About</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">
          Documenting my Java learning journey. Sharing insights, code examples,
          and best practices as I explore the Java ecosystem.
        </p>
      </div>
    </div>
  );
}
