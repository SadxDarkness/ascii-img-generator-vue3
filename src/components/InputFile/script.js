import { ref } from 'vue'

export default emit => {

    const fileInput = ref(null)
    const fileName = ref('')


    // Функция для укорочения названия файла
    const shortenFileName = (n) => n.replace(/^(.{10})(.+)(\..+)$/, (_, a, b, c) => a + '..' + c);

    const handleFileChange = () => {

        const file = fileInput.value.files[0];
        if (file)
            fileName.value = shortenFileName(file.name);


        const reader = new FileReader()
        reader.onload = (e) => {
            emit('update', e.target.result)
        }
        reader.readAsDataURL(file)

    };

    return { fileInput, fileName, handleFileChange}
}