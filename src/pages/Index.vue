<template>
  <Layout>
    <main>
      <h1>All the problems</h1>
      <svg
        :height="height"
        :width="width"
        :viewBox="`0 0 ${width} ${height}`"
      >
        <g
          :transform="`translate(${height/2},${height/2})`"
        >
          <text
            v-for="problem in enhancedProblems"
            :key="problem.id"
            :x="problem.position.x"
            :y="problem.position.y"
          >{{problem.name}}</text>
        </g>       
      </svg>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'All the problems - Studio Sanstream'
  },

  data () {
    return {
      height: 600,
      width: 600,

    }
  },

  computed: {
    enhancedProblems () {
      if (this.$page && this.$page.allProblem.edges && this.$page.allProblem.edges.length) {
        return this.$page.allProblem.edges.map((edge, index) => {
          const angleInRadians = (index / this.$page.allProblem.edges.length) * 2 * Math.PI
          const desiredRadius = ((this.height - 100) / 2)
          return {
            ...edge.node,
            position: {
              x: desiredRadius * Math.cos(angleInRadians),
              y: desiredRadius * Math.sin(angleInRadians),
            },
          }
        })
      }
      return []
    }
  },
}
</script>

<style>
</style>

<page-query>
query {
  allProblem {
    edges {
      node {
        whatIsDone,
        id
        name
        expl
        causes {
          name
          id
          expl
          target
        }
        wikiLink
      }
    }
  }
}
</page-query>