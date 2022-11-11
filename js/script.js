document.addEventListener('DOMContentLoaded', function () {  
  if (document.querySelector('.h-slider')   ) {
    const slider = tns({
      "container": ".h-slider",
      items: 1,
      "swipeAngle": false,
      "mouseDrag": true,
      "autoplayTimeout": 5500,
      slideBy: '1',
      autoplay: true,
      controls:false,
      nav: false,
      autoplayButtonOutput	: false ,
    });
  }
  
  //  if (document.querySelector('.development_projects-slider')   ) {
  const slider = tns({
    "container": ".development_projects-slider",
    items: 1,
    // "autoWidth": true,
    "swipeAngle": false,
    "autoplayTimeout": 5500,
    slideBy: '1',
    autoplay: true,
    controls:false,
    navContainer: "#slPager",
    autoplayButtonOutput	: false, 
    "mouseDrag": true,
  });
// } 

//   const zgu_slider = tns({
//     "container": ".zgu-slider",
//     items: 1,
//     // "autoWidth": true,
//     "swipeAngle": false,
//     "autoplayTimeout": 5500,
//     slideBy: '1',
//     autoplay: true,
//     controls:false,
//     navContainer: "#slPager",
//     autoplayButtonOutput	: false, 
//     "mouseDrag": true,
//   });
// }

  const trust_slider = tns({
    "container": ".partners-slider",
    items: 3,
    "autoplayTimeout": 4000,
    slideBy: '1',
    autoplay: true,
    controls:false,
    nav:false,
    "center": true,
    autoplayButtonOutput:false,

  });

document.querySelector('.prev').addEventListener('click', function () {
  trust_slider.goTo('prev');
  });
document.querySelector('.next').addEventListener('click', () => {
  trust_slider.goTo('next');
  });

//   document.querySelector('.up_link').onclick = () => {
//     window.scrollTo(pageYOffset, 0);
// }



});