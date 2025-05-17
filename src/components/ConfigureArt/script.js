import {ref} from 'vue'

export default () => {
    const settingsTitle = {
        width: 'Ширина:',
        symbolSpace: 'Символ пробела:',
        symbolDot: 'Символ точки:'
    }
    
    const settingsValue = ref({
        width: '',
        symbolSpace: '',
        symbolDot: ''
    })
    return {settingsTitle, settingsValue}
}