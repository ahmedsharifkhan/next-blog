import { getPage, getBlocks } from '../../../lib/notion';

export default async function Post({ params }) {
  const { id } = params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return (
    <div>
      <h1>{page.properties.Name.title[0].text.content}</h1>
      <div>
        {blocks.map((block) => {
          switch (block.type) {
            case 'paragraph':
              return <p key={block.id}>{block.paragraph.text[0].text.content}</p>;
            case 'heading_1':
              return <h1 key={block.id}>{block.heading_1.text[0].text.content}</h1>;
            case 'heading_2':
              return <h2 key={block.id}>{block.heading_2.text[0].text.content}</h2>;
            case 'heading_3':
              return <h3 key={block.id}>{block.heading_3.text[0].text.content}</h3>;
            case 'bulleted_list_item':
              return <li key={block.id}>{block.bulleted_list_item.text[0].text.content}</li>;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
