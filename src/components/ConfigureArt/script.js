import {reactive, watch} from 'vue'

export default (emit) => {
    const settingsConfig = {
        resolution: {
            title: 'Разрешение',
            type: 'number'
        },
        symbolSpace: {
            title: 'Символ пробела',
            type: 'text'
        },
        symbolDot: {
            title: 'Символ точки',
            type: 'text'
        },
        brightness : {
            title: 'Яркость',
            type: 'range',
            min: '0',
            max: '255'
        }
    }
    
    const settingsValue = reactive({
        resolution: 150,
        symbolSpace: '#',
        symbolDot: '.',
        brightness: 150
    })
    


    watch(settingsValue, () => {emit('update', settingsValue)})


    return {settingsConfig, settingsValue}
}