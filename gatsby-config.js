module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://sinanberkkagaac.netlify.app/`,
    // Your Name
    name: 'Sinan Berk Karaagac',
    // Main Site Title
        title: `Sinan Berk Karaagac | Gameplay Programmer`,
    // Description that goes under your name in main bio
    description: `Me ;)`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
     github: `https://github.com/FindikBabmbino`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sinan-berk-karaa%C4%9Fa%C3%A7-9a139313a/`,
    // Content of the About Me section
        fiverr: `https://www.fiverr.com/findikbabi/create-new-gameplay-functions-or-fix-your-code?context_referrer=search_gigs&source=top-bar&ref_ctx_id=78ae1dfffa92aca3e7e92c8021a1e76f&pckg_id=1&pos=3&context_type=auto&funnel=2cb46aa83855a6a52600bbd7dea24cc5&seller_online=true`,
        about: `I am a hardworking game dev who wants to make games that can bring joy to people, to me games are an art form that can make people escape from their realities and let them forget about their stressful daily life, and inspire them by the stories and characters they play. I am skilled in writing, game design, C++ and C#.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Lilean',
        description:
          'A break neck speed, physics based fps game',
       link: 'https://findik-bambino.itch.io/lileanproto',
      },
      {
        name: 'Orhan Quest',
        description:
          'A turn based short experience that features a lot of in jokes',
        link: 'https://drive.google.com/file/d/1tQLoF-sg4AIpJUeFvvXcZtvskn3MQA9b/view?usp=sharing'
      },
      {
        name: 'Office Rage',
        description:
          'Beat-em up game',
        link: 'https://findik-bambino.itch.io/office-rage'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Galip Gulup',
        description: 'Lead Developer, January 2021 - Present',
        link: '',
      },
      {
        name: 'Fiverr',
        description: 'Gameplay Programmer, June 2021-Present',
          link: 'https://www.fiverr.com/findikbabi/create-new-gameplay-functions-or-fix-your-code?context_referrer=search_gigs&source=top-bar&ref_ctx_id=5b90073188fa00e80b38c1459d7345c1&pckg_id=1&pos=1&context_type=auto&funnel=10b495b9955405d749ca0573bae9141d&seller_online=true',
      },
      {
        name: 'Itch.io',
        description: 'I release some games here',
        link: 'https://findik-bambino.itch.io/',
      },
      {
        name: 'Bahcesehir Idea',
        description: 'This is where I studied game design, it is a part of the Bahcesehir University',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
          'C++,C#',
      },
      {
        name: 'Game Design',
        description: 'Game Design,Level Design, VFX, SFX',
      },
      {
        name: 'Tools',
        description: 'Unity,Unreal,Aseprite',
          
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
