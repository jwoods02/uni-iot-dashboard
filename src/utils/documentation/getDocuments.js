import * as contentful from "contentful";
import { spaceId, apiKey } from "../../contentful";

const client = contentful.createClient({
  space: spaceId,
  accessToken: apiKey
});

function getAllDocuments() {
  let allEntries = [];
  client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if (entry.fields) {
        console.log(entry.fields);
        allEntries.push(entry);
      }
    });
  });

  return allEntries;
}

async function getEntriesByType(type) {
  let allEntries = [];
  const entries = await client.getEntries({ content_type: type });
  entries.items.forEach(entry => {
    if (entry.fields) {
      allEntries.push(entry);
    }
  });

  return allEntries;
}

export { getAllDocuments, getEntriesByType };
