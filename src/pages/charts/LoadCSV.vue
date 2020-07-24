<template>
    <q-page class="flex flex-center">
        <div class="col">
          <h1>Loading CSV files</h1>
          <p class="note">
            Add columns <strong class="strong-word">before</strong> loading in the CSV file
          </p>
           <!-- The npm package -->
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
<!-- Renders table based on columns chosen -->
            <q-table
            class="table"
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

            <h1 v-if="parseCsv.length != 0">
              {{ getHeadings() }}
            </h1>

            <br/>
            <div class="q-gutter-y-md">
              <q-card>
                <q-tabs
                  v-model="tab"
                  dense
                  class="tabs bg-grey-9 text-white"
                  active-color="teal"
                  indicator-color="teal"
                  align="justify"
                  narrow-indicator
                >
                  <q-tab name="num" label="Numerical Plot"/>
                  <q-tab name="freq" label="Frequency Plot" />
                </q-tabs>

                <q-separator />
                <div v-show="parseCsv.length != 0 && tab == 'num'">
                  <CustomGraph
                    :list="headings"
                    :data="parseCsv"
                    />
                </div>
                  <div v-show="parseCsv.length != 0 && tab == 'freq'">
                    <FrequencyChart
                    :list="headings"
                    :data="parseCsv"
                    />
                  </div>
              </q-card>
            </div>
        </div>
        <FBTable
        :list="headings"
        :data="parseCsv"/>
    </q-page>
</template>

<script>
import { VueCsvImport } from 'vue-csv-import'
import FBTable from 'src/components/FBTable'
import CustomGraph from 'src/components/CustomGraph'
import FrequencyChart from 'src/components/FrequencyChart'

export default {
  name: 'LoadCSV',
  components: {
    VueCsvImport,
    FBTable,
    CustomGraph,
    FrequencyChart
  },
  data () {
    return {
      tab: '',
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
      // Component key so that the VueCsvImport component re-renders
      this.componentKey += 1
    },
    // Get array of headings chosen by user
    getHeadings () {
      // So that it doesn't keep re-rendering and cause an infinite loop
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
    // When there's data in parseCSV (after user chooses all columns), set check = 0
    setCheck () {
      this.check = 0
    },
    // Show axes only after user chose columns
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

.title {
  margin-top: 20px;
}

.note {
  color: white;
  font-size: 20px;
}

.csvImport {
    color: grey;
}

.refresh-btn {
  margin: 10px;
}

.q-tabs {
  margin-left: 0px;
  margin-right: 0px;
}

.tabs {
  padding-bottom: 5px;
}

</style>
