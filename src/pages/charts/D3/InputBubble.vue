<template>
  <q-page class="flex flex-center">
    <div>
      <svg width="500" height="500">
        <g
          class="flower"
          v-for="flower in layoutData.children"
          :key="flower.data.name"
          :style="{
            transform: `translate(${flower.x}px, ${flower.y}px)`
          }"
        >
          <circle class="flower__circle" :r="flower.r" :fill="flower.data.color"></circle>
          <text class="flower__label">{{ flower.data.name }}</text>
        </g>
      </svg>
      <div class="controls">
        <div class="control" v-for="flower in flowers" :key="flower.name">
          <label
          class="back"
          :class="flower.name"
          style="margin-bottom: 0px"
          >{{ flower.name }}</label>
          <input type="number" v-model="flower.amount" step="10" min="10">
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { hierarchy, pack } from 'd3-hierarchy'
export default {
  name: 'InputBubble',
  data () {
    return {
      flowers: [
        {
          name: 'Roses',
          amount: 25,
          color: 'red'
        },
        {
          name: 'Tulips',
          amount: 40,
          color: 'green'
        },
        {
          name: 'Daisies',
          amount: 15,
          color: 'blue'
        },
        {
          name: 'Narcissuses',
          amount: 9,
          color: 'orange'
        }
      ]
    }
  },

  computed: {
    transformedFlowerData () {
      return {
        name: 'Top Level',
        children: this.flowers.map(flower => ({
          ...flower,
          size: flower.amount,
          parent: 'Top Level'
        }))
      }
    },

    layoutData () {
      // Generate a D3 hierarchy
      const rootHierarchy = hierarchy(this.transformedFlowerData)
        .sum(d => d.size)
        .sort((a, b) => {
          return b.value - a.value
        })

      // Pack the circles inside the viewbox
      return pack()
        .size([500, 500])
        .padding(10)(rootHierarchy)
    }
  }
}
</script>

<style>
body {
  font: 16px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
}

svg {
  display: block;
  margin: 0 auto;
}

.flower {
  transition: transform 0.2s ease-in-out;
  text-anchor: middle;
}

.flower__circle {
  transition: r 0.2s ease-in-out;
}

.flower__label {
  fill: #fff;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.back {
  background-color: white;
}

.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
.orange {
  color: orange;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.control {
  display: inline-flex;
  flex-direction: column;
  margin: 0 4px;
}

.control label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
}

.control input {
  display: block;
  font: inherit;
  width: 100px;
}
</style>
