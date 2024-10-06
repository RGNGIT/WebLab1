document.addEventListener('DOMContentLoaded', () => {
  loadXMLItems();
});
function loadXMLItems() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'src/items.xml', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const xml = xhr.responseXML;
      const items = xml.getElementsByTagName('item');
      const carousel = document.querySelector('.carousel');
      for (let i = 0; i < items.length; i++) {
        const name = items[i].getElementsByTagName('name')[0].textContent;
        const image = items[i].getElementsByTagName('image')[0].textContent;
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        const img = document.createElement('img');
        img.src = image;
        img.alt = name;
        const caption = document.createElement('p');
        caption.textContent = name;
        carouselItem.appendChild(img);
        carouselItem.appendChild(caption);
        carousel.appendChild(carouselItem);
      }
      activateCarousel();
    }
  };
  xhr.send();
}
function activateCarousel() {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.carousel-item').length;
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  });
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  });
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }
}