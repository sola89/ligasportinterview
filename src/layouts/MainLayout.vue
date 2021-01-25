<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Header />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from 'src/components/Header'

export default {
  name: 'MainLayout',
  components: { Header },
  data () {
    return {}
  }
}
</script>

<style lang="sass">
  body
    background: $grey-3
</style>
