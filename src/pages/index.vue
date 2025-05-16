<template>
  <main>
    <section>
      <base-header></base-header>
    </section>

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

import BaseHeader from '@/components/BaseHeader'
import GenerateArt from '@/components/GenerateArt'
import InputFile from '@/components/InputFile'
import ShowArt from '@/components/ShowArt'
import ShowImage from '@/components/ShowImage'
import ConfigureArt from '@/components/ConfigureArt'


defineOptions({ name: 'MainFile'})

</script>

<style lang="scss" scoped src="./style.scss"></style>
