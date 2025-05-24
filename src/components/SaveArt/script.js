export default (asciiArt) => {

    const copyToClipboard = () => {

        navigator.clipboard.writeText(asciiArt.value)
        .then(() => alert('Скопировано в буфер обмена'))
        .catch(err => console.error('Ошибка копирования:', err))

    }

    const saveToFile = () => {

        const blob = new Blob([asciiArt.value], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'ascii-art.txt'
        link.click()
        URL.revokeObjectURL(url)

    }

    return { copyToClipboard, saveToFile}
}