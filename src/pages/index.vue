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
      <show-art :image-src="image" :settings="settings"></show-art>
    </section>

    <section>
      <save-art></save-art>
    </section>

  </main>
</template>
<script setup>

import { ref } from 'vue'

import BaseHeader from '@/components/BaseHeader'
import SaveArt from '@/components/SaveArt'
import InputFile from '@/components/InputFile'
import ShowArt from '@/components/ShowArt'
import ConfigureArt from '@/components/ConfigureArt'

defineOptions({ name: 'MainFile'})

const image = ref(null)

const settings = ref({
    resolution: 150,
    symbolSpace: '#',
    symbolDot: '.',
    brightness: 140
  })
const setImagePreview = (src) => image.value = src
const setImageSettings = (newSettings) => settings.value = newSettings

</script>

<style lang="scss" scoped src="./style.scss"></style>
