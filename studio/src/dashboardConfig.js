export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a3cd4c13d98206b5f40563",
                  title: "Sanity Studio",
                  name: "sanity-ulamaluje-galeria-studio",
                  apiId: "750d89ab-dcd6-4607-b2e7-731a78801be5",
                },
                {
                  buildHookId: "60a3cd4c6fc1ac00a0a3ee2d",
                  title: "Blog Website",
                  name: "sanity-ulamaluje-galeria",
                  apiId: "34befcf3-e9cd-45e3-8862-369f7f05845e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/desw0lf/sanity-ulamaluje-galeria",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-ulamaluje-galeria.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
