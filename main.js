// Getting elements (Selettori sono lunghi per provare il funzionamento)
var burgerMenuOpen = $('.header-right > a');
var burgerMenuClose = $('.hamburger-menu a.close');
var mediumDeviceMenu = $('.hamburger-menu')

// // Opens menu for medium and small device
// $(burgerMenuOpen).click(
//   function() {
//     $(mediumDeviceMenu).show(150);
//   }
// );
//
// // Close menu for medium and small device
// $(burgerMenuClose).click(
//   function() {
//     $(mediumDeviceMenu).hide(150);
//   }
// );
//

// ====================BONUS=====================
// La stessa cosa con la classe esistente nel css

$(burgerMenuOpen).click(
  function() {
    $(mediumDeviceMenu).addClass('active');
  }
);


// Close menu for medium and small device
$(burgerMenuClose).click(
  function() {
    $(mediumDeviceMenu).removeClass('active');
  }
);
