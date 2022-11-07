// Validation form

const form = document.querySelector('.post-form');
const nickname = document.getElementById('log');
const club = document.getElementById('theme');
const textarea = document.getElementById('text');

form.addEventListener('submit', (e) => {
    checkInput();
})

function checkInput () {
    const nicknameValue = nickname.value.trim();
    const textareaValue = textarea.value.trim();
    const clubValue = club.value.trim();

    if (nicknameValue.length < 3) {
        console.log('Никнейм слишком короткий')
    }

    if (nicknameValue.length > 30) {
        console.log('Никнейм слишком длинный');
    }

    if (textareaValue.length < 3) {
        console.log('Слишком короткий текстовый блок');
    }

    if (textareaValue.length > 300) {
        console.log('Слишком много символов в текстовом блоке');
    }

    if (clubValue.length < 3) {
        console.log('Слишком короткое название клуба');
    }

    if (clubValue.length > 50) {
        console.log('Слишком длинное название клуба');
    }
}