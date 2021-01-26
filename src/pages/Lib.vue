<template>
  <div class="mini-container">
    <div class="row q-pa-md">
      <div class="col-12">
        <q-breadcrumbs gutter="xs">
          <q-breadcrumbs-el label="Главная" to="/" />
          <q-breadcrumbs-el :label="libName" />
        </q-breadcrumbs>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="image">
            <q-img
              :src="lib.data.general.image.url"
              :title="lib.data.general.image.title"
              contain
            >
            </q-img>
          </div>
          <div class="text-subtitle2 top-tags">
            <q-badge class="q-mr-sm" outline color="primary" :label="tag.name" v-for="tag in lib.data.general.tags" :key="tag.id" />
          </div>
        </div>
        <div class="col-12 col-md-8">
          <h4 class="h3 title">{{ lib.data.general.name }}</h4>
          <p class="description" v-html="lib.data.general.description"></p>
          <ul>
            <li v-if="lib.data.general.contacts.website">
             <a :href="lib.data.general.contacts.website"> <q-icon name="language" /> &nbsp;{{ lib.data.general.contacts.website }}</a>
            </li>
            <li v-if="lib.data.general.contacts.email">
             <a :href="`mailto://${lib.data.general.contacts.email}`"> <q-icon name="email" /> &nbsp;{{ lib.data.general.contacts.email }}</a>
            </li>
            <li v-if="lib.data.general.contacts.phones.value">
             <a :href="`tel:${lib.data.general.contacts.phones.value}`"> <q-icon name="phone" /> &nbsp;{{ lib.data.general.contacts.phones.value }}</a>
            </li>
          </ul>
          <div class="ymap">
            <yandex-map
              :settings="settings"
              :coords="libCoords"
              zoom="15"
              style="height: 400px; width: 100%;"
            >
              <ymap-marker
                markerId="1"
                marker-type="placemark"
                :coords="libCoords"
                hint-content="Hint content 1"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                :icon="{color: 'red'}"
                cluster-name="1"
              ></ymap-marker>
            </yandex-map>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'Lib',
  data () {
    return {
      settings: {
        apiKey: '1210d14-1d50-4ed5-ab3a-2b95304ce723',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      }
    }
  },
  meta () {
    return {
      title: this.libName
    }
  },
  components: {
    yandexMap,
    ymapMarker
  },
  computed: {
    ...mapGetters(
      'libs', ['getLibById']
    ),
    lib () {
      return this.getLibById(this.$route.params.id)
    },
    libName () {
      return this.lib.data.general.name
    },
    libCoords () {
      return [this.lib.data.general.address.mapPosition.coordinates[1], this.lib.data.general.address.mapPosition.coordinates[0]]
    }
  }
}
</script>

<style lang="sass" scoped>
  .h3
    margin: 0
    padding: 0

  .image
    min-height: 260px
    margin-right: 25px

  .mini-container
    max-width: 1200px
    margin: 30px auto
    background: #fff
    padding: 25px

  .description
    margin-top: 25px

  .top-tags
    margin-top: 10px

  ul
    margin: 0
    padding: 0

    li
      list-style: none
      margin: 10px 0

  a
    text-decoration: none
    color: $secondary

  .ymap
    margin-top: 30px
</style>
