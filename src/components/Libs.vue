<template>
  <div>
    <h3>Каталог библиотек в регионах</h3>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="lib in libs" :key="lib.data.general.id">
        <div class="image-wrap">
          <q-img
            :src="lib.data.general.image.url"
            :title="lib.data.general.image.title"
          >
          </q-img>
        </div>

        <q-card-section>
          <div class="text-h6 elipsis">{{ lib.data.general.name }}</div>
          <div class="text-subtitle2 tags-space">
            <q-badge @click="sortByTag(tag.name)" class="q-mr-sm custom-badge" outline color="primary" :label="tag.name" v-for="tag in lib.data.general.tags" :key="tag.id" />
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
import { mapGetters } from 'vuex'

export default {
  name: 'Libs',
  components: {},
  data () {
    return {
      libs: []
    }
  },
  computed: {
    ...mapGetters(
      'libs', ['getLibsByTag']
    )
  },
  methods: {
    sortByTag (tag) {
      this.libs = this.getLibsByTag(tag)
    }
  },
  mounted () {
    this.$store.dispatch('libs/fetchLibs')
    this.libs = this.$store.getters['libs/getLibs']
  }
}
</script>

<style lang="sass">
  .my-card
    width: 100%
    max-width: 350px

  .image-wrap
    height: 200px
    overflow: hidden

  .tags-space
    margin-top: 15px
    height: 40px

  .elipsis
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

  a
    text-decoration: none

  .custom-badge
    cursor: pointer
</style>
