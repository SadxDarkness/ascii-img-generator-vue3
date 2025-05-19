<template>
    <div class="wrap-show-image">
        <div class="show-image">
            <h1>Ваш арт:</h1>
            <div class="image">
                <pre class="image-art">
                    {{ output }}
                </pre>
            </div>
        </div>
    </div>
</template>
<script setup>
import setup from './script'
const props = defineProps({
  imageSrc: {
    type: String,
    default: null
  }
})
defineOptions({
    name: 'ShowImage'
})

const { output } = setup(props)
</script>
<style lang="scss" scoped src="./style.scss"></style>