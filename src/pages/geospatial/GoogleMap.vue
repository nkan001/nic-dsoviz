// Doesn't work because I didn;t pay for the Google API billing

<template lang="html">
  <q-page class="flex flex-center">
    <div class="title col">
      <h1>Your coordinates:</h1>
      <p> Latitude: {{ coordinates.lat }}, Longitude: {{ coordinates.lng }}</p>
      <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px"
      >
    </GmapMap>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      coordinates: {
        lat: 0,
        lng: 0
      }
    }
  },
  created () {
    // get users location from browser request
    // added the VueGeolocation import in index.js file
    this.$getLocation({})
      .then(coordinates => {
        this.coordinates = coordinates
      })
      .catch(error => alert(error))
  }
}
</script>

<style lang="css" scoped>
h1, p {
  color: white;
}

.title {
  text-align: center
}
</style>
