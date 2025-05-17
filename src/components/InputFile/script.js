import { ref } from 'vue'

export default () => {
    const fileInput = ref(null)
    const fileName = ref('')

    const handleFileChange = () => {
        // Функция для укорочения названия файла
        const shortenFileName = (n) => n.replace(/^(.{5})(.+)(\..+)$/, (_, a, b, c) => a + '..' + c);

        const file = fileInput.value.files[0];
        if (file)
            fileName.value = shortenFileName(file.name);
    };









    return { fileInput, fileName, handleFileChange}
}