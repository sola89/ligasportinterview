<template>
  <div>
    <!-- <pre>{{ data }}</pre> -->
    <h3>Каталог библиотек в регионах</h3>
    <div class="q-pa-md row items-start q-gutter-sm">
      <q-card class="my-card" v-for="lib in libs" :key="lib.data.general.id">
        <!-- <pre>{{ lib.data.general}}</pre> -->
        <div class="image-wrap">
          <q-img
            :src="lib.data.general.image.url"
            :title="lib.data.general.image.title"
            contain
          >
          </q-img>
        </div>

        <q-card-section>
          <div class="text-h6">{{ lib.data.general.name }}</div>
          <div class="text-subtitle2">
            <q-badge class="q-mr-sm" outline color="primary" :label="tag.name" v-for="tag in lib.data.general.tags" :key="tag.id" />
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <router-link :to="`libs/${lib.data.general.id}`">
            <q-btn label="Перейти" outline color="purple" />
          </router-link>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Libs',
  components: {},
  data () {
    return {}
  },
  computed: {
    libs () {
      return this.$store.getters['libs/getLibs']
    }
  },
  mounted () {
    this.$store.dispatch('libs/fetchLibs')
  }
}
</script>

<style lang="sass">
  .my-card
    width: 100%
    max-width: 500px

  .image-wrap
    height: 320px
    overflow: hidden
</style>
