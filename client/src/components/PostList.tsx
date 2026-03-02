import { Link } from "wouter";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul style={{ paddingLeft: "1.25rem" }}>
      {posts.map((post) => (
        <li key={post.slug} className="post-item">
          <Link href={`/posts/${post.slug}`}>
            <a className="group flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">

                {/* Meta row */}
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  <span className="cat-badge" data-cat={post.category}>
                    {post.category}
                  </span>
                  <span className="text-[0.75rem] text-muted-foreground tabular-nums">
                    {formatDate(post.date)}
                  </span>
                  <span className="text-[0.75rem] text-muted-foreground">
                    {post.readingTime} min
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[1rem] font-semibold text-foreground group-hover:text-primary transition-colors duration-150 leading-snug mb-1.5">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[0.875rem] text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-[0.9rem] text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-150 mt-1 flex-shrink-0 select-none">
                →
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
