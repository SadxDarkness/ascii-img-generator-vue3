<template>
    <div class="save-buttons">
        <button type="button" @click="copyToClipboard">Скопировать</button>
        <button type="button" @click="saveToFile">Сохранить</button>
    </div>
</template>
<script setup>
import sharedState from '@/composables/useSharedState'
import setup from './script'

const asciiArt = sharedState.asciiArt
const {copyToClipboard, saveToFile} = setup(asciiArt)


defineOptions({
    name: 'GenerateArt'
})
</script>
<style lang="scss" scoped src="./style.scss"></style>