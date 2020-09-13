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
          <rect
            v-for="problem in enhancedProblems"
            :key="problem.id"
            :x="problem.position.x"
            :y="problem.position.y"
            :width="problemBox.width"
            :height="problemBox.height"
            stroke="brown"
            stroke-width="1"
            fill="none"
          >
          </rect>
          <foreignObject
            v-for="problem in enhancedProblems"
            :key="problem.id"
            :x="problem.position.x"
            :y="problem.position.y"
            :width="problemBox.width"
            :height="problemBox.height"
          >
            <article class="problem-item">
              <summary>
                {{problem.name}}
                <ul>
                  <li
                    v-for="cause in problem.causes"
                    :key="cause.id"
                  >
                    <a :href="`#${cause.target}`">
                      {{cause.name}}
                    </a>
                  </li>
                </ul>
                <details>
                  <p>{{problem.expl}}</p>
                  <h2>What is being done?</h2>
                  <p>{{problem.whatIsDone}}</p>
                  <h2>What else can be done?</h2>
                  <p>{{problem.whatCanBeDone}}</p>
                  <h2>What can you do?</h2>
                  <p>{{problem.whatCanYouDo}}</p>
                </details>
              </summary>
            </article>
          </foreignObject>
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
      problemBox: {
        width: 150,
        height: 150,
        padding: 10,
      },
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

svg {
  overflow: visible;
}

.problem-item h2 {
  margin: 2em 0 1em 0;
}

.problem-item ul {
  padding: 0;
  list-style: none;
}

.problem-item {
  padding: 1em;
  overflow-y: auto;
  max-height: 100%;
}

</style>

<page-query>
query {
  allProblem {
    edges {
      node {
        whatIsDone,
        whatCanYouDo
        whatCanBeDone
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