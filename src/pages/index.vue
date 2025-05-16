<template>
  <main>
    <section>
      <input-file></input-file>
      <configure-art></configure-art>
    </section>
    <section>
      <show-image></show-image>
      <show-art></show-art>
    </section>
    <section>
      <generate-art></generate-art>
    </section>
  </main>
</template>
<script setup>
defineOptions({ name: 'MainFile'})
import GenerateArt from '../components/GenerateArt/index.vue'
import InputFile from '../components/InputFile/index.vue'
import ShowArt from '../components/ShowArt/index.vue'
import ShowImage from '../components/ShowImage/index.vue'
import ConfigureArt from '../components/ConfigureArt/index.vue'

</script>

<style lang="scss" scoped src="./style.scss"></style>
