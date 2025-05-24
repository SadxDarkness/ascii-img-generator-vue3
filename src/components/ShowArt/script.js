import { ref, computed, watchEffect, watch } from 'vue'
export default (props, sharedState) => {
  
  const output = ref(null)

  const settings = computed(() => ({
    width: props.settings.resolution,
    height: props.settings.resolution / 2,
    darkChar: props.settings.symbolSpace,
    lightChar: props.settings.symbolDot,
    brightnessThreshold: props.settings.brightness
  }))
  

  const getCharFromBrightness = (brightness) => brightness < settings.value.brightnessThreshold ? settings.value.darkChar : settings.value.lightChar

  const convertToASCII = (img) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
  
    canvas.width = settings.value.width
    canvas.height = settings.value.height

    if (canvas.width <= 0 || canvas.height <= 0) {
      return
    }

    ctx.drawImage(img, 0, 0, settings.value.width, settings.value.height)
    const imageData = ctx.getImageData(0, 0, settings.value.width, settings.value.height).data
    let ascii = ''

    for (let y = 0; y < settings.value.height; y++) {
      let line = ''
    for (let x = 0; x < settings.value.width; x++) {
      const offset = ((y * settings.value.width) + x) * 4
      const r = imageData[offset]
      const g = imageData[offset + 1]
      const b = imageData[offset + 2]

      const brightness = 0.299 * r + 0.587 * g + 0.114 * b

      const char = getCharFromBrightness(brightness)

      line += char
    }
    ascii += line + '\n'
  }
  output.value = ascii
}

  watchEffect(() => {
    if (!props.imageSrc || !props.settings.resolution) return

    const img = new Image()

    img.onload = () => {
      convertToASCII(img)
    }

    img.onerror = () => {
      output.value = 'Ошибка загрузки изображения'
    }

    img.src = props.imageSrc
  })

  watch(settings, () => {
    if (!props.imageSrc || !props.settings.resolution) return

    const img = new Image()

    img.onload = () => {
      convertToASCII(img)
    }

    img.src = props.imageSrc
  })
  
  watchEffect(() => {
    sharedState.asciiArt.value = output.value
  })


return { output }
}