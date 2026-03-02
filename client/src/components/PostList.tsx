import { Link } from "wouter";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number;
}

const CATEGORY_STYLES: Record<string, string> = {
  Tibia: "bg-amber-500/15 text-amber-400 dark:text-amber-400",
  Programação: "bg-violet-500/15 text-violet-500 dark:text-violet-400",
  Fundamentos: "bg-sky-500/15 text-sky-500 dark:text-sky-400",
  Java: "bg-orange-500/15 text-orange-500 dark:text-orange-400",
};

function categoryStyle(cat: string) {
  return CATEGORY_STYLES[cat] ?? "bg-secondary text-muted-foreground";
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
    <ul className="divide-y divide-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <a className="group flex items-start justify-between gap-4 py-6 transition-all">
              <div className="flex-1 min-w-0">
                {/* Meta */}
                <div className="flex items-center flex-wrap gap-2 mb-2.5">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryStyle(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.date)} · {post.readingTime} min
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5 text-base sm:text-lg">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-1 flex-shrink-0">
                →
              </span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
