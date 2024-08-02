import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Function to get the content of a single post
const getPost = async (slug) => {
  const filePath = path.join('posts', `${slug}.md`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    frontMatter,
    contentHtml,
  };
};

// Function to generate static params for dynamic routes
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('posts'));

  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

// Component to render a single post
export default async function Post({ params }) {
  const { slug } = params;
  const { frontMatter, contentHtml } = await getPost(slug);

  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </div>
  );
}
