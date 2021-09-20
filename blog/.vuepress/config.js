const path = require("path");

module.exports = {
  title: "YuYan (Yu Zhang)",
  description: "YuYan's blog, powered by VuePress, themed by Gungnir.",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "gungnir",
  themeConfig: {
    repo: "YuYanzy/YuYanzy.github.io",
    docsDir: "blog",
    docsBranch: "master",
    editLinks: true,
    lastUpdated: true,
    hitokoto: {
      api: "https://v1.hitokoto.cn/?c=c&c=d&c=h&c=i&c=j&c=k"
    },
    searchIcon: "ri-search-2-line",
    codeTheme: "gungnir-dark",
    comment: {
      platform: "github",
      owner: "YuYanzy",
      repo: "blog-comments",
      clientId: "e48d58b81f77f56d858d",
      clientSecret: "ca7eed5366016f1504ae57df2e5f17dca360567b"
    },
    analytics: {
      ga: "UA-207981937-1",
    },
    katex: true,
    mdPlus: {
      all: true
    },
    readingTime: {
      excludes: ["/about", "/tags/.*", "/links"]
    },
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "About",
        link: "/about/",
        icon: "fa-paw"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      // {
      //   text: "Links",
      //   link: "/links/",
      //   icon: "fa-satellite-dish"
      // },
      // {
      //   text: "Portfolio",
      //   link: "https://portfolio.zxh.io/",
      //   icon: "ri-space-ship-fill"
      // }
    ],
    personalInfo: {
      name: "YuYan",
      avatar: "/img/avatar.jpg",
      description: "欢迎来到宇言的小木屋",
      sns: {
        github: "YuYanzy",
        linkedin: "yu-zhang-a02b1a168",
        // facebook: "renovamen.zou",
        // twitter: "renovamen_zxh",
        // zhihu: "chao-neng-gui-su",
        email: "zhang_steven@outlook.com"
      }
    },
    homeHeaderImages: {
      local: [
        {
          path: "/img/home-bg/1.png",
          mask: "rgba(80, 64, 51, .3)"
        },
        {
          path: "/img/home-bg/2.png",
          mask: "rgba(196, 176, 131, .1)"
        },
        {
          path: "/img/home-bg/3.png",
          mask: "rgba(40, 57, 101, .4)"
        },
        {
          path: "/img/home-bg/4.png",
          mask: "rgba(19, 75, 50, .1)"
        },
        {
          path: "/img/home-bg/5.png",
          mask: "rgba(19, 75, 50, .1)"
        },
        {
          path: "/img/home-bg/6.png"
        },
        {
          path: "/img/home-bg/7.png"
        },
        {
          path: "/img/home-bg/8.png"
        },
        {
          path: "/img/home-bg/9.png"
        },
      ]
    },
    pages: {
      tags: {
        title: "Tags",
        subtitle: "Show Me The Way",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      // links: {
      //   title: "Links",
      //   subtitle:
      //     "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
      //   bgImage: {
      //     path: "/img/pages/links.jpg",
      //     mask: "rgba(64, 118, 190, 0.5)"
      //   }
      // }
    },
    footer: `
      &copy; <a href="https://github.com/YuYanzy" target="_blank">YuYanzy</a> 2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5"]
  },
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          public: path.resolve(__dirname, "./public")
        }
      }
    };
    // const NODE_ENV = process.env.NODE_ENV;
    // if (NODE_ENV === "production") {
    //   return {
    //     output: {
    //       publicPath:
    //         "https://cdn.jsdelivr.net/gh/Renovamen/renovamen.github.io@gh-pages/"
    //     },
    //     resolve: {
    //       alias: {
    //         public: path.resolve(__dirname, "./public")
    //       }
    //     }
    //   };
    // } else {
    //   return {
    //     resolve: {
    //       alias: {
    //         public: path.resolve(__dirname, "./public")
    //       }
    //     }
    //   };
    // }
  }
};
