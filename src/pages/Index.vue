<template>
  <q-page padding>
    <div class="mini-container">
      <Libs />
    </div>
  </q-page>
</template>

<script>
import Libs from 'src/components/Libs'
export default {
  name: 'Index',
  components: { Libs }
}
</script>

<style lang=sass>
  .mini-container
    max-width: 1200px
    margin: 30px auto
    background: #fff
    padding: 25px
</style>
