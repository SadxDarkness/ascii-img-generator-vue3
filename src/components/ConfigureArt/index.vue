<template>
    <div class="wrap-settings">
        <div class="settings">
            <h2>Настройки:</h2>
            <ul>
                <li v-for="(title, key) in settingsTitle" :key="key">
                    <label :for="key">{{ title }}</label>
                    <input type="text" :id="key" v-model="settingsValue[key]" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import setup from './script'

const {settingsTitle, settingsValue} = setup()
defineOptions({
    name: 'ConfigureArt'
})
</script>

<style lang="scss" scoped src="./style.scss"></style>