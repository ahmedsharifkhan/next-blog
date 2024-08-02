import { getDatabase } from '../../lib/notion';
import Link from 'next/link';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default async function Blog() {
  const posts = await getDatabase(databaseId);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.properties.Name.title[0].text.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
