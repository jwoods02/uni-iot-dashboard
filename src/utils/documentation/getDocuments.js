import * as contentful from "contentful";
import { spaceId, apiKey } from "../../contentful";

export default function getAllDocuments() {
  let client = contentful.createClient({
    space: spaceId,
    accessToken: apiKey
  });

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
