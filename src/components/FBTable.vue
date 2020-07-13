<template>
    <div class="q-pa-md">
    <q-table
      title="FBData Table"
      :data="data"
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
          label="Reset"
          @click="reset()"/>
          <q-space />
          <q-input outlined dense debounce="500" color="primary" v-model="filtering">
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
          label: 'date',
          field: 'date'
        },
        {
          name: 'Page Name',
          label: 'name',
          field: 'name'
        },
        {
          name: 'Alias',
          label: 'alias',
          field: 'alias'
        },
        {
          name: 'Likes',
          label: 'likes',
          field: 'likes'
        },
        {
          name: 'Category',
          label: 'category',
          field: 'category'
        },
        {
          name: 'Insta Username',
          label: 'username',
          field: 'username'
        },
        {
          name: 'Insta Followers',
          label: 'followers',
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

<style lang="css">
h1 {
  color: white;
}

q-input {
  width: 200px;
}

.refresh-btn {
  padding: -5px;
  margin: 30px;
}

</style>
