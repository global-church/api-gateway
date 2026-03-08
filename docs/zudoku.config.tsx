import type { ZudokuConfig } from "zudoku";

/**
 * Developer Portal Configuration
 * For more information, see:
 * https://zuplo.com/docs/dev-portal/zudoku/configuration/overview
 */
const config: ZudokuConfig = {
  site: {
    title: "Global.Church Developer Portal",
    logo: {
      src: {
        light: "/gc-logo.png",
        dark: "/gc-logo.png",
      },
    },
  },
  metadata: {
    title: "Global.Church Developer Portal",
    description: "Global.Church API documentation and developer playground site",
  },
  redirects: [
    { from: "/", to: "/guides/what-is-global-church" },
  ],
  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            { type: "doc", file: "guides/what-is-global-church" },
            { type: "doc", file: "guides/key-concepts" },
            { type: "doc", file: "guides/get-an-api-key" },
          ],
        },
        {
          type: "category",
          label: "For App Developers",
          icon: "code",
          items: [
            { type: "doc", file: "guides/developers/sparql-quickstart" },
            { type: "doc", file: "guides/developers/data-modeling-cookbook" },
            { type: "doc", file: "guides/developers/contributing-linked-data" },
            { type: "doc", file: "guides/developers/mcp-integration" },
          ],
        },
        {
          type: "category",
          label: "For Data Managers",
          icon: "database",
          items: [
            { type: "doc", file: "guides/data-managers/knowledge-graph-overview" },
            { type: "doc", file: "guides/data-managers/data-quality-shacl" },
            { type: "doc", file: "guides/data-managers/reviewing-claims" },
            { type: "doc", file: "guides/data-managers/adding-a-country" },
          ],
        },
        {
          type: "category",
          label: "Reference",
          icon: "book-open",
          items: [
            { type: "link", label: "Ontology Reference", to: "https://ontology.global.church" },
            { type: "link", label: "SKOS Vocabularies", to: "https://ontology.global.church/vocabs" },
            { type: "doc", file: "guides/reference/named-graph-conventions" },
            { type: "doc", file: "guides/reference/uri-patterns" },
            { type: "doc", file: "guides/reference/his-registries" },
          ],
        },
      ],
    },
    {
      type: "link",
      label: "API Reference",
      to: "/api",
    },
  ],
  docs: {
    files: "/pages/**/*.mdx",
  },
  apis: [
    {
      type: "file",
      input: "../config/routes.oas.json",
      path: "api",
    },
  ],
  // TODO: Configure Privy authentication
  // authentication: {
  //   type: "auth0",
  //   domain: "auth.zuplo.site",
  //   clientId: "f8I87rdsCRo4nU2FHf0fHVwA9P7xi7Ml",
  //   audience: "https://api.example.com/",
  // },
  apiKeys: {
    enabled: true,
  },
};

export default config;
