import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getDatabase = async (databaseId) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    return response.results;
  } catch (error) {
    console.error(`Error fetching database: ${error}`);
    throw error;
  }
};

export const getPage = async (pageId) => {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (error) {
    console.error(`Error fetching page: ${error}`);
    throw error;
  }
};

export const getBlocks = async (blockId) => {
  try {
    const blocks = [];
    let cursor;
    while (true) {
      const { results, next_cursor } = await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
      });
      blocks.push(...results);
      if (!next_cursor) {
        break;
      }
      cursor = next_cursor;
    }
    return blocks;
  } catch (error) {
    console.error(`Error fetching blocks: ${error}`);
    throw error;
  }
};
