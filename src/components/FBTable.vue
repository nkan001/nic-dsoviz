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
    toSearch: String
  },
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'Ad Date',
          align: 'center',
          label: 'Date',
          field: 'date'
        },
        {
          name: 'Page Name',
          label: 'Page Name',
          field: 'name'
        },
        {
          name: 'Alias',
          label: 'Alias',
          field: 'alias'
        },
        {
          name: 'Likes',
          label: 'Likes',
          field: 'likes'
        },
        {
          name: 'Category',
          label: 'Category',
          field: 'category'
        },
        {
          name: 'Insta Username',
          label: 'Username',
          field: 'username'
        },
        {
          name: 'Insta Followers',
          label: 'Followers',
          field: 'followers'
        }
      ]
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
</style>
