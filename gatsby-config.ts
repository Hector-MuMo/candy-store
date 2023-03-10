import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Blog-news`,
        siteUrl: `https://www.yourdomain.tld`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },
        "gatsby-plugin-sharp", "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-netlify',
        /*         {
                    resolve: `gatsby-plugin-google-fonts`,
                    options: {
                        fonts: [
                            `Playfair Display pro\:300,400,400i,700`,
                            `Bebas Neue`,
                            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
                        ],
                        display: 'swap'
                    }
                }, */
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Bebas Neue`,
                        file: `https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap`,
                    },
                    {
                        name: `Playfair Display`,
                        file: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;800&display=swap`,
                    },
                ],
            },
        },
    ]
};

export default config;
