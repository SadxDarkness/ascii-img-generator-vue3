<template>
    <div class="wrap-show-image">
        <div class="show-image">
            <h1>Ваше изображение:</h1>
            <div class="image">
                <img :src="imageSrc" v-if ="imageSrc" alt="userPhoto">
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: null
  }
})
defineOptions({
    name: 'ShowImage'
})
</script>
<style lang="scss" scoped src="./style.scss"></style>