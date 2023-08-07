
type FunctionNames =
  | "apply_ner"
  | "search_articles"
  | "get_summary"
  | "search_and_summarize";

export const functions: {
  name: FunctionNames;
  description: string;
  parameters: object;
}[] = [
  {
    name: "apply_ner",
    description: "Extract and list named entities (such as people, organizations, locations, etc.) from a content of an article.",
    parameters: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "The title of the Wikipedia article.",
        },
      },
      required: ["title"],
    },
  },
  {
    name: "search_articles",
    description:
      "Search for articles on Wikipedia based on a search term.",
    parameters: {
      type: "object",
      properties: {
        search_term: {
          type: "string",
          description: "The search term to use when searching for articles.",
        },
      },
      required: ["search_term"],
    },
  },
  {
    name: "get_summary",
    description:
      "Get a summary of a Wikipedia article based on its title.",
    parameters: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "The title of the Wikipedia article.",
        },
      },
      required: ["title"],
    },
  },
  {
    name: "search_and_summarize",
    description:
      "Search for articles on Wikipedia based on a search term and get a summary of each article.",
    parameters: {
      type: "object",
      properties: {
        search_term: {
          type: "string",
          description: "The search term to use when searching for articles.",
        },
      },
      required: ["search_term"],
    },
  },
];

async function search_articles(search_term: string) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${search_term}&format=json`,
  );
  const data = await response.json();
  return data.query.search;
}

async function get_summary(title: string) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${title}`,
  );
  const data = await response.json();
  const pageId = Object.keys(data.query.pages)[0];
  return data.query.pages[pageId].extract;
}

async function search_and_summarize(search_term: string) {
  const articles = await search_articles(search_term);
  const summaries = await Promise.all(
    articles.map((article: any) => get_summary(article.title)),
  );
  return summaries;
}

async function apply_ner(title: string) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=${title}`,
  );
  const data = await response.json();
  const pageId = Object.keys(data.query.pages)[0];
  const content = data.query.pages[pageId].revisions[0]["*"];
  const cuted = shorten_text(content, 4090)
  return cuted;
}

function shorten_text(text: string, max_chars: number) {
  // If the text is shorter than the limit, return it as is
  if (text.length <= max_chars) {
    return text;
  }
  // Otherwise, truncate the text at the limit
  // We subtract 3 for the "..." at the end
  return text.slice(0, max_chars - 3) + '...';
}


  

export async function runFunction(name: string, args: any) {
  switch (name) {
    case "search_articles":
      return await search_articles(args["search_term"]);
    case "get_summary":
      return await get_summary(args["title"]);
    case "search_and_summarize":
      return await search_and_summarize(args["search_term"]);
    case "apply_ner":
      return await apply_ner(args["title"]);
    default:
      return null;
  }
}

// type FunctionNames =
//   | "search_articles"
//   | "get_abstract"
//   | "search_and_summarize"
//   | "search_and_get_abstracts";

// export const functions: {
//   name: FunctionNames;
//   description: string;
//   parameters: object;
// }[] = [
//   {
//     name: "search_articles",
//     description:
//       "Search for articles on PubMed based on a search term.",
//     parameters: {
//       type: "object",
//       properties: {
//         search_term: {
//           type: "string",
//           description: "The search term to use when searching for articles.",
//         },
//       },
//       required: ["search_term"],
//     },
//   },
//   {
//     name: "get_abstract",
//     description:
//       "Get the abstract of a PubMed article based on its PubMed ID.",
//     parameters: {
//       type: "object",
//       properties: {
//         id: {
//           type: "string",
//           description: "The PubMed ID of the article.",
//         },
//       },
//       required: ["id"],
//     },
//   },
//   {
//     name: "search_and_get_abstracts",
//     description:
//       "Search for articles on PubMed based on a search term and get the abstract of each article.",
//     parameters: {
//       type: "object",
//       properties: {
//         search_term: {
//           type: "string",
//           description: "The search term to use when searching for articles.",
//         },
//       },
//       required: ["search_term"],
//     },
//   },
//   {
//     name: "search_and_summarize",
//     description:
//           "Search for the top 5 on PubMed based on a search term and get a summary of each article in less than 4080 tokens.",
//         parameters: {
//           type: "object",
//           properties: {
//             search_term: {
//               type: "string",
//               description: "The search term to use when searching for articles.",
//             },
//           },
//           required: ["search_term"],
//         },
//   },
// ];

// const API_KEY = process.env.PUBMED_API_KEY

// async function search_articles(search_term: string) {
//   const response = await fetch(
//     `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${search_term}&retmode=json&apikey=${API_KEY}`,
//   );
//   const data = await response.json();
//   return data.esearchresult.idlist;  // Updated this line
// }

// async function get_abstract(id: string) {
//   const response = await fetch(`
//     https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${id}&retmode=xml&apikey=${API_KEY}
//   `)
//   const data = await response.text()
//   const abstract = data.replace(
//     /<AbstractText[^>]*>([^<]+)<\/AbstractText>/g,
//     "$1",
//   )
//   return abstract
// }


// async function get_abstract_by_term(term: string) {
//   const response = await fetch(`
//     https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${term}&retmode=json&apikey=${API_KEY}
//   `)
//   const data = await response.json()
//   const id = data.esearchresult.idlist[0]
//   return await get_abstract(id)
// }

// async function search_and_get_abstracts(search_term: string) {
//   const ids = await search_articles(search_term);
//   const abstracts = await Promise.all(
//     ids.map((id: string) => get_abstract(id)),
//   );
//   return abstracts;
// }

// export async function runFunction(name: string, args: any) {
//   switch (name) {
//     case "search_articles":
//       return await search_articles(args["search_term"]);
//     case "get_abstract":
//       return await get_abstract(args["id"]);
//     case "search_and_get_abstracts":
//       return await search_and_get_abstracts(args["search_term"]);
//     default:
//       return null;
//   }
// }