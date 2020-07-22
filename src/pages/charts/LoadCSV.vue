<template>
    <q-page class="flex flex-center">
        <div class="col">
          <h1>Loading CSV files</h1>
          <p class="note">
            Add columns <strong class="strong-word">before</strong> loading in the CSV file
          </p>
            <VueCsvImport
            :key="componentKey"
            class="csvImport"
            v-model="parseCsv"
            :map-fields="colArray"
            v-on:input="setCheck()"
            >

            <template slot="error">
                File type is invalid
            </template>

            <template slot="thead">
                <tr>
                    <th>Column in CSV file</th>
                </tr>
            </template>
            <template slot="next" slot-scope="{load}">
                <button @click.prevent="load">Load CSV</button>
            </template>
            </VueCsvImport>

            <q-table
            class="table"
            title="FBData Table"
            :data="parseCsv"
            :columns="columns"
            row-key="id"
            :filter="filter"
            :loading="loading"
            >

            <template v-slot:top>
              <q-btn
                    class="refresh-btn"
                    color="white"
                    text-color="black"
                    label="Add More Columns"
                    @click="addCol()"
                    />
              <q-space />
              <q-input outlined dense debounce="300" color="primary" v-model="filter">
              </q-input>
            </template>
            </q-table>

            <br/>
            <h1 v-if="parseCsv.length != 0">
              {{ getHeadings() }}
              Plot a graph
            </h1>
            <p
              v-if="parseCsv.length != 0"
              class="note">
              Y Axis should have <strong class="strong-word">numerical</strong> data
            </p>

            // Dummy section. Just using it to get the FBTable component styles. Doesn't render
            <FBTable
            :data="parseCsv"
            toSearch=""
            :columns="columns">
            </FBTable>

            <div v-show="parseCsv.length != 0">
              <CustomGraph
              :list="headings"
              :data="parseCsv"
              />
            </div>
        </div>
    </q-page>
</template>

<script>
import { VueCsvImport } from 'vue-csv-import'
import { FBTable } from 'src/components/FBTable'
import CustomGraph from 'src/components/CustomGraph'

export default {
  name: 'LoadCSV',
  components: {
    VueCsvImport,
    FBTable,
    CustomGraph
  },
  data () {
    return {
      componentKey: 0,
      check: 0,
      showAxis: false,
      colArray: [],
      headings: [],
      number: 1,
      parseCsv: [],
      loading: false,
      filter: '',
      columns: []
    }
  },
  methods: {
    addCol () {
      this.colArray.push(`Column${this.number}`)
      if (this.colArray.length === 0) {
        let one = {
          name: 'Col 1',
          align: 'center',
          label: 'Col 1',
          field: 'Column1'
        }
        this.number += 1
        this.columns.push(one)
      } else {
        let one = {
          name: `Col ${this.number}`,
          label: `Col ${this.number}`,
          field: `Column${this.number}`
        }
        this.number += 1
        this.columns.push(one)
      }
      this.componentKey += 1
    },
    getHeadings () {
      if (this.check === 0) {
        let tempObj = this.parseCsv[0]
        let headings = Object.values(tempObj)
        this.columns.forEach((d, i) => {
          d.name = headings[i]
          d.label = headings[i]
        })
        this.headings = headings

        this.parseCsv.splice(0, 1)
        this.check += 1
      }
    },
    setCheck () {
      this.check = 0
    },
    toggleAxis () {
      this.showAxis = true
    }
  },
  mounted () {
    this.addCol()
  }
}
</script>

<style scoped>
h1,p {
    color: white
}

.note {
  color: white;
  font-size: 20px;
}
.strong-word {
  color: teal;
}

.csvImport {
    color: grey;
}

.refresh-btn {
  margin: 10px;
}

</style>
