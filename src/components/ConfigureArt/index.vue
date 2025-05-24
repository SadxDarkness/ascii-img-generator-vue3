<template>
    <div class="wrap-settings">
        <div class="settings">
            <h2>Настройки:</h2>
                <ul>
                <li v-for="(field, key) in settingsConfig" :key="key">
                    <label :for="key">{{ field.title }}</label>

                    <input
                    :type="field.type"
                    :id="key"
                    v-model="settingsValue[key]"
                    :min="field.min"
                    :max="field.max"
                    />
                    
                    <span v-if="field.type === 'range'">{{ settingsValue[key] }}</span>
                </li>
                </ul>
        </div>
    </div>
</template>

<script setup>

import { defineEmits } from 'vue'
import setup from './script'

const emit = defineEmits(['update'])
const {settingsConfig, settingsValue} = setup(emit)
defineOptions({
    name: 'ConfigureArt'
})

</script>

<style lang="scss" scoped src="./style.scss"></style>