
const images = [       
    'https://im-a-puzzle.com/gallery/Landscapes/Sunlight-by-the-lake.jpg',
    'https://im-a-puzzle.com/gallery/Seasons/Autumn/Autumn-by-the-lake.jpg',
    'https://u-stena.ru/upload/iblock/ce2/ce26ed330ac62438398957a2fa12fb9c.jpg',
    'https://u-stena.ru/upload/iblock/39c/39c6cc6503600ce1c51f3e8f630113f8.jpg',
    'https://docs.montagne-vacances.com/actualites/large/check-list-pour-un-ete-a-la-montagne-949.jpg',

]

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const sliderCaption = document.getElementById('slider-caption');

//Кнопка вперёд
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

//Кнопка назад
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

function updateSlider() {
    sliderImage.src = images[currentIndex];
    sliderCaption.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;



        
    
}
// Инициализация слайдера при загрузке страницы
updateSlider();
