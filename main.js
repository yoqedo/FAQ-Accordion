

const answerBtn = document.querySelectorAll('.buttons');

answerBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        showAnswer(this.dataset.answer, this.dataset.icon);
    })
})

function showAnswer(ans, icon) {
    document.querySelector(`#${ans}`).classList.toggle('active');
    document.querySelector(`#${icon}`).classList.toggle('icon-rotate');
}