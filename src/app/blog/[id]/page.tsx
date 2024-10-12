import { blogPosts } from '../../blogPosts';
import styles from '../../page.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === params.id);
  const otherPosts = blogPosts.filter(p => p.id !== params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <article className={styles.blogPostPage}>
          <h1>{post.title}</h1>
          <p className={styles.postMeta}>Posted on {post.date}</p>
          <div className={styles.blogPostContent} dangerouslySetInnerHTML={{ __html: post.content }} />
          <Link href="/#blog" className={styles.backToBlog}>
            Back to Blog
          </Link>
        </article>
        <aside className={styles.otherPosts}>
          <h2>Other Posts</h2>
          <ul className={styles.otherPostsList}>
            {otherPosts.map(otherPost => (
              <li key={otherPost.id}>
                <Link href={`/blog/${otherPost.id}`} className={styles.otherPostLink}>
                  {otherPost.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
}
