<template>
    <div class="wrap-show-image">
        <div class="show-image">
            <h1 v-if="output">Ваш арт:</h1>
            <h1 v-else>Загрузите изображение</h1>
            <div class="image">
                <pre class="image-art" id="ascii-art" :class="{ 'fade-in': output }">
{{ output }}
                </pre>
            </div>
        </div>
    </div>
</template>
<script setup>
import sharedState from '@/composables/useSharedState'
import setup from './script'
const props = defineProps({
  imageSrc: {
    type: String,
    default: null
  },
  settings: {
    type: Object,
    default: null
  }
})
defineOptions({
    name: 'ShowImage'
})
const { output } = setup(props, sharedState)
</script>
<style lang="scss" scoped src="./style.scss"></style>