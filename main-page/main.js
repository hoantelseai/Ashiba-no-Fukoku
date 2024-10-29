// SLIPT WORD ANIMATION GSAP

// let typeSplit;

// // Split the text up
// function runSplit() {
//   typeSplit = new SplitType(".split-word", {
//     types: "lines, words"
//   });
//   $(".word").append("<div class='line-mask'></div>");
//   createAnimation();
// }

// runSplit();

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// // Create staggered animation
// function createAnimation() {
//   let allMasks = $(".word").map(function() {
//     return $(this).find(".line-mask");
//   }).get();

//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".company-info",
//       start: "top center",
//       end: "bottom center",
//       scrub: 1
//     }
//   });
//   $(".split-word").addClass("visible");

//   tl.to(allMasks, {
//     width: "0%",
//     duration: 1,
//     stagger: 0.5
//   });


// }


let typeSplit;

// Split the text up
function runSplit() {
  typeSplit = new SplitType(".split-word", {
    types: "lines, words"
  });
  $(".word").append("<div class='line-mask'></div>");
  createAnimation();
}

runSplit();

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Create staggered animation
function createAnimation() {
  let allMasks = $(".word").map(function() {
    return $(this).find(".line-mask");
  }).get();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".company-info",
      start: "top center",
      end: "bottom center",
      scrub: 1
    }
  });

  $(".split-word").addClass("visible");
  tl.to(allMasks, {
    width: "0%",
    duration: 1,
    stagger: 0.8
  });
}


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '#my-text',
    start: 'top center', // Bắt đầu khi đỉnh của h1 chạm vào giữa màn hình
    onEnter: () => {
        const myText = new SplitType('#my-text');

        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.001,
            duration: 0.01
        });
    }
});

// SCROLLING


document.addEventListener('DOMContentLoaded', function() {
  const recruitmentLink = document.querySelector('li.color-block1');
  if (recruitmentLink) {
      recruitmentLink.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector('#recruitment');
          const header = document.querySelector('.navibar');
          const headerHeight = header.offsetHeight;

          if (target) {
              // Tính toán vị trí cuộn
              const targetPosition = target.getBoundingClientRect().top + window.scrollY;
              const windowHeight = window.innerHeight;
              const offsetPosition = targetPosition - (windowHeight / 2) + (target.offsetHeight / 2) - headerHeight;

              // Sử dụng requestAnimationFrame để cuộn mượt mà
              function smoothScroll() {
                  const currentPosition = window.scrollY;
                  const distance = offsetPosition - currentPosition;
                  const step = distance / 0.05; // Chia quãng đường thành 0.05 bước

                  if (Math.abs(distance) > 1) {
                      window.scrollBy(0, step);
                      requestAnimationFrame(smoothScroll);
                  } else {
                      window.scrollTo(0, offsetPosition);
                  }
              }

              smoothScroll();
          }
      });
  }
});