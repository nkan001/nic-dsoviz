<template>
<!-- Scrollable list -->
    <div class="q-pa-lg bg-grey-10 text-white">
          <q-input
          class="search-box"
          filled
          dark
          v-model="searchList"
          label="Page Name"
          />
          <q-list
          v-if="showList"
          class="list-area"
          dark
          separator style="width: 320px">
            <q-scroll-area style="height: 430px; max-width: 300px;">
              <q-item
                v-for="(name, index) in filteredList"
                :key="index"
                clickable
                v-ripple
                @click="clickedList(name)">
                  <q-item-section>{{ name }}</q-item-section>
                </q-item>
            </q-scroll-area>
          </q-list>
        </div>
</template>

<script>
export default {
  name: 'FBList',
  props: {
    distinctNames: Array
  },
  data () {
    return {
      searchList: '',
      showList: true
    }
  },
  computed: {
    // Filtering thru list as user types input
    filteredList () {
      return this.distinctNames.filter(post => {
        return post.toLowerCase().includes(this.searchList.toLowerCase())
      })
    }
  },
  methods: {
    clickedList (no) {
      this.$parent.clickedList(no)
    }
  }
}
</script>

<style>
.search-box {
  margin-bottom: 20px;
}
</style>
