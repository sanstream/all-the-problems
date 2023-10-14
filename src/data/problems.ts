import { randomInt } from "d3-random"

export type WorldProblemEffect = {
  id: string
  affects: WorldProblem
  explanation?: string
}

export type WorldProblem = {
  id: string
  name: string
  description?: string
  causes: Set<WorldProblemEffect>
}

const problemIds = [
  "recessions",
  "inequality",
  "wars",
  "extinctions",
  "climate change",
  "hunger",
  "epidemics",
]

const worldProblems: Map<string, WorldProblem> = new Map()
problemIds.forEach(id => {
  worldProblems.set(id, {
    id,
    name: id,
    causes: new Set(),
  })
})

const getRandomIndex = randomInt(0, problemIds.length - 1)
const getSampleSize = randomInt(10, 60)
for (const [id, worldProblem] of worldProblems) {
  for (let i = 0; i < getSampleSize(); i++) {
    const randomProblem = worldProblems.get(problemIds[getRandomIndex()])
    if (randomProblem !== undefined) {
      worldProblem.causes.add({
        id: `${worldProblem.id}->${problemIds[i]}`,
        affects: randomProblem,
      })
    }
  }
}

export default worldProblems
