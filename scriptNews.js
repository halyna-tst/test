alert("Тут можно поменять местами отдельные блоки")


function redirectToNewsOne(titleNews1, textNews1) {

    const title = document.getElementById(titleNews1).textContent;
    const content = document.getElementById(textNews1).textContent;
    const encodedTitle = encodeURIComponent(title);
    const encodedText = encodeURIComponent(content);
    window.location.href = `news1.html?title=${encodedTitle}&text=${encodedText}`;
}

function redirectToNewsTwo(titleNews2, textNews2) {

    const title = document.getElementById(titleNews2).textContent;
    const content = document.getElementById(textNews2).textContent;
    const encodedTitle = encodeURIComponent(title);
    const encodedText = encodeURIComponent(content);
    window.location.href = `news1.html?title=${encodedTitle}&text=${encodedText}`;
}

function redirectToNewsThree(titleNews3, textNews3) {

    const title = document.getElementById(titleNews3).textContent;
    const content = document.getElementById(textNews3).textContent;
    const encodedTitle = encodeURIComponent(title);
    const encodedText = encodeURIComponent(content);
    window.location.href = `news1.html?title=${encodedTitle}&text=${encodedText}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const columns = document.getElementById("columns");

    if (columns) {
        Sortable.create(columns, {
            animation: 150, // добавляет анимацию
            ghostClass: 'sortable-ghost', // добавляет стиль для перетаскиваемого элемента
            handle: '.card' // позволяет перетаскивать только при нажатии на карточки
        });
    } else {
        console.error('Element with id "colums" not found!');
    }
});


