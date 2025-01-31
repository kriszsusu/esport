
window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
  });
  
  let registrationCounter = 0;
  
  document.getElementById('regisztracios-urlap').addEventListener('submit', function (e) {
    e.preventDefault();
    registrationCounter++;
    document.getElementById('regisztralas-szamlalo').textContent = registrationCounter;
    alert('Regisztráció Sikeres!');
    this.reset();
  });

  const carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach(item => {
    item.addEventListener('click', function () {
      const link = item.querySelector('a').href;
      window.open(link, '_blank');
    });
  });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });