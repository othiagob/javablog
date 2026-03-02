import { Link } from "wouter";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="pb-8 border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors p-4 rounded-lg"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Link href={`/posts/${post.slug}`}>
                <a className="no-underline hover:no-underline">
                  <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </a>
              </Link>

              <p className="text-muted-foreground text-sm mt-2">
                <span className="font-semibold">{post.date}</span>
                {" · "}
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium mt-1">
                  {post.category}
                </span>
                {" · "}
                <span>{post.readingTime} min read</span>
              </p>

              <p className="text-foreground/80 mt-4 leading-relaxed">
                {post.excerpt}
              </p>

              <Link href={`/posts/${post.slug}`}>
                <a className="inline-block mt-4 text-primary font-semibold hover:underline">
                  Read more →
                </a>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
