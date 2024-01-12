function toggleNav(){
   let innerGrid = document.querySelector('.outer-grid');
   innerGrid.classList.toggle("outer-grid-expanded");

   let innerGridHide = document.querySelector('nav');
    innerGridHide.classList.toggle("nav-hide");
}
