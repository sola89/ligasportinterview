<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col">
          <div class="image">
            <q-img
              :src="lib[0].data.general.image.url"
              :title="lib[0].data.general.image.title"
              contain
            >
            </q-img>
          </div>
        </div>
        <div class="col">
          <h3 class="h3">{{ lib[0].data.general.name }}</h3>
        </div>
      </div>
    </div>
    <pre>{{ lib }}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Lib',
  computed: {
    ...mapGetters(
      'libs', ['getLibById']
    ),
    lib () {
      return this.getLibById(this.$route.params.id)
    }
  }
}
</script>

<style lang="sass" scoped>
  .h3
    margin: 0
    padding: 0

  .image
    min-height: 500px
    margin-right: 25px
</style>
