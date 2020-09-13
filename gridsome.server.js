// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const rawProblems = require('./src/data/problems.json');

    const Problems = actions.addCollection({
      typeName: 'Problem'
    })

    
    for (const Problem of rawProblems) {
      Problems.addNode({
        ...Problem,
      });
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
