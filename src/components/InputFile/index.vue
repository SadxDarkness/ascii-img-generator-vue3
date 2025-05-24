<template>
    <div class="wrap-input">
        <div class="input">
            <button 
                type="button"
                class="custom-button"
                @click="$refs.fileInput.click()"
            >
                Выберите файл:
            </button>

            <span class="file-name">
                {{ fileName || 'Название файла' }}
            </span>

            <input 
                type="file" 
                class="hidden-input"
                accept=".png, .jpg, .jpeg" 
                ref="fileInput" 
                @change="handleFileChange"
            />
        </div>
    </div>

</template>

<script setup>

import { defineEmits } from 'vue'
import setup from './script'

const emit = defineEmits(['update'])
const { fileInput, fileName, handleFileChange } = setup(emit)

defineOptions({
    name: 'InputFile'
})

</script>

<style lang="scss" scoped src="./style.scss"></style>