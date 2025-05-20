<template>
  <main>
    <section>
      <base-header></base-header>
    </section>

    <section class="input-n-settings">
      <input-file @update="setImagePreview"></input-file>
      <configure-art @update="setImageSettings"></configure-art>
    </section>

    <section class="show">
      <show-image :image-src="image"></show-image>
      <show-art :image-src="image" :settings="settings"></show-art>
    </section>

    <section>
      <generate-art></generate-art>
    </section>

  </main>
</template>
<script setup>
import { ref, reactive } from 'vue'

import BaseHeader from '@/components/BaseHeader'
import GenerateArt from '@/components/GenerateArt'
import InputFile from '@/components/InputFile'
import ShowArt from '@/components/ShowArt'
import ShowImage from '@/components/ShowImage'
import ConfigureArt from '@/components/ConfigureArt'

defineOptions({ name: 'MainFile'})

const image = ref(null)

const settings = ref(
  {
    resolution: 150,
    symbolSpace: '#',
    symbolDot: '.',
    brightness: 140
  }
)
const setImagePreview = (src) => image.value = src
const setImageSettings = (newSettings) => settings.value = newSettings

</script>

<style lang="scss" scoped src="./style.scss"></style>
