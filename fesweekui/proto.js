let currentSlide = 0;
let currentPage = 1;
const totalPages = 5;  // 총 페이지 수를 여기에 설정합니다.

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function showPage(page) {
    const pageNumberElement = document.getElementById('page-number');
    pageNumberElement.textContent = page;

    // 페이지 번호에 따라 다른 데이터를 로드하거나 표시합니다.
    // 이 예시에서는 단순히 페이지 번호를 표시합니다.
    console.log(`페이지 ${page} 로드`);
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// 초기 페이지와 슬라이드 설정
showPage(currentPage);
showSlide(currentSlide);
