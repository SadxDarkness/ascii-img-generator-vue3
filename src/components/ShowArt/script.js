import { ref, watchEffect } from 'vue'
export default (props) => {
    const output = ref(null)
const settings = {
  width: 150,
  height: 75,
  darkChar: '#',
  lightChar: '.',
  brightnessThreshold: 142, // Увеличим порог для светлых изображений
  useWeightedBrightness: true, // Включаем взвешенную формулу яркости
}

const getCharFromBrightness = (brightness) => 
  brightness < settings.brightnessThreshold ? settings.darkChar : settings.lightChar

const convertToASCII = (img) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = settings.width
  canvas.height = settings.height

  ctx.drawImage(img, 0, 0, settings.width, settings.height)

  const imageData = ctx.getImageData(0, 0, settings.width, settings.height).data
  let ascii = ''

  for (let y = 0; y < settings.height; y++) {
    let line = ''
    for (let x = 0; x < settings.width; x++) {
      const offset = ((y * settings.width) + x) * 4
      const r = imageData[offset]
      const g = imageData[offset + 1]
      const b = imageData[offset + 2]

      // Расчет яркости с использованием взвешенной формулы
      const brightness = settings.useWeightedBrightness
        ? 0.299 * r + 0.587 * g + 0.114 * b
        : (r + g + b) / 3

      const char = getCharFromBrightness(brightness)
      line += char
    }
    ascii += line + '\n'
  }

  output.value = ascii
}

// Наблюдатель за изменением изображения
watchEffect(() => {
  if (!props.imageSrc) return

  const img = new Image()
  img.onload = () => {
    convertToASCII(img)
  }
  img.onerror = () => {
    output.value = 'Ошибка загрузки изображения'
  }
  img.src = props.imageSrc
})


    return { output }
}