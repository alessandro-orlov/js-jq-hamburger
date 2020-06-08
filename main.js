// Getting elements (Selettori sono lunghi per provare il funzionamento)
var burgerMenuOpen = $('.header-right > a');
var burgerMenuClose = $('.hamburger-menu a.close');
// var mediumDeviceMenu = $('.hamburger-menu') // ERRORE: var fuori dalla funzione

// // Opens menu for medium and small device
// burgerMenuOpen.click(
//   function() {
//     $('.hamburger-menu').show(150);
//   }
// );
//
// // Close menu for medium and small device
// burgerMenuClose.click(
//   function() {
//     $('.hamburger-menu').hide(150);
//   }
// );


// ====================BONUS=====================
// La stessa cosa con la classe esistente nel css

burgerMenuOpen.click(
  function() {
    $('.hamburger-menu').addClass('active');
  }
);

// Close menu for medium and small device
burgerMenuClose.click(
  function() {
    $('.hamburger-menu').removeClass('active');
  }
);
