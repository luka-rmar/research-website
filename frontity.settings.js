const settings = {
  name: "becapital-research-website",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Notícias", "/category/noticias/"],
            ["Colunas", "/category/colunas/"],
            ["Mundo", "/category/noticias/r1/mundo/"],
            ["R1", "/category/noticias/r1/"],
            ["Pátria Amada", "/category/noticias/patria-amada/"],
            ["Saúde", "/category/noticias/nossos-avancos/saude/"],
            ["Nossos Avanços", "/category/noticias/nossos-avancos/"],
            [
              "Segurança Pública",
              "/category/noticias/patria-amada/seguranca-publica/",
            ],
            ["Economia", "/category/noticias/r1/economia/"],
            ["Política", "/category/noticias/r1/politica/"],
            ["Educação", "/category/noticias/patria-amada/educacao/"],
            ["Judiciário", "/category/noticias/patria-amada/judiciario/"],
            [
              "Ciência e Tecnologia",
              "/category/noticias/nossos-avancos/ciencia-e-tecnologia/",
            ],
            [
              "Infraestrutura",
              "/category/noticias/nossos-avancos/infraestrutura/",
            ],
            // ["Japan", "/tag/japan/"],
            // ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // url: "http://research-admin.be.capital/",
          url: "https://myright.news/",
          params: {
            per_page: 9,
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
