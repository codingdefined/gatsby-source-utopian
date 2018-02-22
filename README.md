### gatsby-source-utopian

It is a source plugin of pulling your posts from Utopian.io to Gatsby. You need to provide your utopian name and it will get all the posts whether approved or rejected.

For Usage Check https://github.com/codingdefined/gatsby-utopian-blog.

In the gatsby-config.js file you need to add the gatsbt-source-utopian as shown below, where user is the username for which you would like to get all teh posts.

```
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-utopian',
      options: {
        user: 'codingdefined',
      },
    },
  ],
};
```
