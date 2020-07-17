<template>
    <div class="q-pa-md">
    <q-table
      class="table"
      title="FBData Table"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
      >
        <template v-slot:top>
          <div class="q-pa-sm">
            <q-btn
              class="refresh-btn"
              color="white"
              text-color="black"
              label="Reset"
              @click="reset()"/>
          </div>
          <q-space />
          <q-input borderless dense debounce="500" color="primary" v-model="filtering">
          </q-input>
        </template>

      </q-table>
    </div>
</template>

<script>
export default {
  name: 'FBTable',
  props: {
    data: Array,
    toSearch: String,
    columns: Array
  },
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10
    }
  },
  methods: {
    change () {
      this.filter = this.toSearch
    },
    reset () {
      this.toSearch = ''
      this.filtering()
    }
  },
  computed: {
    filtering () {
      this.change()
      return this.filter
    }
  }

}
</script>

<style>
.refresh-btn {
  padding-left: 30px
}

.table {
  background-color: #f2f0eb;
}

.q-table__bottom-item {
  margin-right: 50px;
}

.q-field__control-container {
  margin-left: 30px;
  padding-left:10px;
  padding-right: 0px;
}

.q-select__dropdown-icon {
  padding:10px;
}

.q-field__inner {
  padding-left: 0px;
  padding-right:0px;
}
</style>
