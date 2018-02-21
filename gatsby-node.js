const crypto = require('crypto');
const utopian = require('utopian-api');

exports.sourceNodes = async ({ boundActionCreators }, { user }) => {
  const { createNode } = boundActionCreators;
  return utopian.getPostByAuthor('codingdefined').then((data) => {
    data.results.forEach(post => {
      const nodeStr = JSON.stringify(post);
      const nodeHash = crypto
        .createHash('md5')
        .update(nodeStr)
        .digest('hex');

      createNode({
        ...post,
        id: `${post.id}`,
        parent: "root",
        children: [],
        internal: {
          type: 'UtopianPost',
          content: nodeStr,
          contentDigest: nodeHash,
        },
      });
    });
  });
};
