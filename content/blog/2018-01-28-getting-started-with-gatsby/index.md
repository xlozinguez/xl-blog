---
path: "/posts/2018-01-28-getting-started-with-gatsby"
date: "2018-01-28T03:15:59.165Z"
title: "Getting started with Gatsby"
tags: ["blog", "github", "gatsby", "serverless"]
excerpt: "Getting your site up to speed using Gatsby."
---

These are some notes in case you are interested in getting your site up and running on [Github Pages](https://pages.github.com/) using [Gatsby](https://www.gatsbyjs.org/).

## Gatsby?

[Gatsby](https://www.gatsbyjs.org/) combines the power of [React](https://reactjs.org), [GraphQL](http://graphql.org/) and [Webpack](https://webpack.js.org/) to make publishing your own static PWA a breeze. Combine it with the generous and robust static site host ([Github Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/)...) and you can deploy your site in a few minutes with minimal associated cost.

> The origin of this blog post comes from the great [Egghead.io tutorial by Taylor Bell](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby).
>
> You can also find great resources in the [Gatsby's documentation](https://www.gatsbyjs.org/docs/).


## The Gameplan

1. Install Gatsby `npm install --global gatsby-cli`

2. Create a new site:

    ```console
    gatsby new gatsby-site
    cd gatsby-site
    gatsby develop
    ```

    Gatsby will start a hot-reloading development environment accessible at `localhost:8000`

3. If you want to use markdown as an editor system, install the following plugins:

    ```console
    yarn add gatsby-source-filesystem --save
    yarn add gatsby-tranformer-remark --save
    ```

    Then configure the plugins in the `gatsby-config.js` file:

    ```javascript
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src`
        }
      }
    ]
    ```

    This will set `src` as the root path for your application files. 

4. In `src/pages` you can place your folders in which you can add your `index.md` markdown files. You can name each folder with `YEAR-MONTH-DAY-SLUG`. At the top of the`index.md` file of each pages folder, add a snippet as such:

    ```markdown
    ---
    path: "/YEAR-MONTH-DAY-SLUG"
    date: "TIMESTAMP"
    title: "Lorem ipsum"
    excerpt: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    ---
    ```

5. in `src/page/index.js`, create a proper GraphQL query to provide access to the collection of pages within the `src/pages` folder. The query in our case would look like:

    ```javascript
      const IndexPage = ({ data }) => {
      const { edges: posts } = data.allMarkdownRemark;
      return (
        <div>
          <h1>Hi people, check my stuff out</h1>
          { 
            posts.map(({ node: post }) => {
              const { frontmatter } = post;
              return (
                <div key={ frontmatter.date }>
                  <h2>
                    <Link to={ frontmatter.path }>
                      { frontmatter.title }
                    </Link>
                  </h2>
                  <p>
                    <b>{ frontmatter.date }</b> - { frontmatter.excerpt }
                  </p>
                </div>
              );
            })
          }
        </div>
      );
    };

    export const query = graphql`
      query Indexquery {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              id,
              frontmatter {
                title
                date(formatString: "MMM DD, 'YY")
                path
                excerpt
              }
            }
          }
        }
      }
    `
    ```

6. Finally, create your post template to display your content. In `templates/blog-post.js`:

    ```javascript
    import React from 'react'
    import Link from 'gatsby-link'
    import Helmet from 'react-helmet'

    const Template = ({data, location}) => {
      const { markdownRemark: post } = data
      const { frontmatter, html } = post
    
      return (
        <div>
          <Helmet title={`${title} - My Blog`} />

          <div>
            <h1>{title}</h1>
            <h3>{date}</h3>

            <div dangerouslySetInnerHTML={{__html: html}} />
          </div>
        </div>
      )
    }

    export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html 
        frontmatter {
          title
          date(formatString: "MMMM, DD, YYYY")
          path
          tags
          excerpt
        }
      }
    }
    `

    export default Template
    ```

7. Hook your template and your graphql query. In `gatsby-node.js`:
    ```javascript
    const path = require('path');

    exports.createPages = ({ boundActionCreators, graphql }) => {
      const { createPage } = boundActionCreators;
      const blogPostTemplate = path.resolve('src/templates/blog-post.js');

      return graphql(
        `{
          allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
            edges {
              node {
                html
                id
                frontmatter {
                  date
                  path
                  title
                  excerpt
                  tags
                }
              }
            }
          }
        }`
      )
      .then(result => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        console.log(`There are ${posts.length} post(s)`);

        posts.forEach(({node}, index) => {
          createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node
            }
          })
        });
      })
      ```

8. Deploy your site to Github:
  * Install `gh-pages`: 
  ```console
  yarn add --dev gh-pages
  ```
  * Create a new project on github and set up the `pathPrefix` of the `gatsby-config` file accordingly:
  ```json
  module.exports = {
    pathPrefix: `/my-github-project-name`,
    ...
  ```
  * Hook the `deploy` command in your npm `package.json` file:
  ```json
  ...
  "scripts": {
    ...
    "deploy": "gatsby build --prefix-paths && gh-pages -d public",
    ...
  }
  ...
  ```


# Other Gatsby commands:
  * `gatsby build` — Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
  * `gatsby serve` — Gatsby starts a local HTML server for testing your built site.

> Lots of great resources in the Gatsby [docs](https://www.gatsbyjs.org/docs) and [community pages](https://www.gatsbyjs.org/docs/awesome-gatsby/).

