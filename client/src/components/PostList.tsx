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
            <a className="group block">

              {/* Meta row */}
              <div className="flex items-center gap-2.5 mb-2">
                <span className="cat-badge" data-cat={post.category}>
                  {post.category}
                </span>
                <span className="text-[0.73rem] text-muted-foreground tabular-nums">
                  {formatDate(post.date)}
                </span>
                <span className="text-[0.73rem] text-muted-foreground">
                  · {post.readingTime} min
                </span>
              </div>

              {/* Title — the most important element */}
              <h3
                className="text-[1.1rem] font-bold text-foreground group-hover:text-primary transition-colors duration-150 leading-[1.3] mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.015em" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>

            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
