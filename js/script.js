let icon = document.querySelector('.top-mobile-menu_wrapper');
let test = document.querySelector('.menu-bar1');
let test2 = document.querySelector('.menu-bar2');
let test3 = document.querySelector('.menu-bar3');
icon.addEventListener('click',function()
                  {
 test.classList.toggle('menu-bar1-active');  
  test2.classList.toggle('menu-bar2-active');
  test3.classList.toggle('menu-bar3-active');
  
});


