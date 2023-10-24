const textArray = [
    "Embark on an exhilarating journey through our vibrant cityscape with our top-notch bike rentals. Discover hidden corners, scenic routes, and cultural gems on two wheels. Our fleet offers a seamless blend of style and comfort, ensuring that every ride is a memorable one. From quality maintenance to effortless booking, we prioritize your safety and convenience. At AirSpin, we believe that exploration should be both eco-friendly and hassle-free, allowing you to unlock new adventures with ease",

    "Whether you're a seasoned cyclist or a casual rider, we've curated a selection of bikes to suit every age and ability. Choose from our range of meticulously maintained bicycles, all designed to provide a smooth and comfortable journey. Safety is at the core of our service, and we guarantee that every bike is in top-notch condition before it reaches your hands. With convenient rental options and a straightforward booking process, you'll be out on the streets, wind in your hair, in no time.",
    
    "At AirSpin, we're more than just a bike rental service; we're your gateway to a world of exploration and adventure. Say goodbye to crowded buses and congested streets, and embrace the freedom of pedaling at your own pace. Whether you're a solo traveler, a couple seeking a romantic getaway, or a family looking for a day of bonding, our tailored rental packages cater to all. Begin your adventure today and rediscover the city from a whole new perspective. Join us in making every ride an unforgettable experience.",

 
    // Add more phrases as needed
];

let currentIndex = 0;
const changingText = document.getElementById("changing-text");

function changeText() {
    changingText.style.opacity = 0; // Start fade-out

    setTimeout(() => {
        changingText.textContent = textArray[currentIndex];
        currentIndex = (currentIndex + 1) % textArray.length;
        
        changingText.style.opacity = 1; // Start fade-in
    }, 500); // Wait for 500ms (0.5s) for the fade-out effect
}

changeText(); // Initial call

setInterval(changeText, 30000); 


// Animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);
  
// faq
function toggleAnswer(questionId) {
  const answer = document.getElementById(questionId);
  answer.classList.toggle('faq-answer');

  const chevron = document.querySelector(`#${questionId} .chevron`);
  chevron.classList.toggle('open');
}
