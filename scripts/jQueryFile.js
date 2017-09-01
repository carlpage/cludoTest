$(document).ready(function() {
  console.log('in jq');

  $(document).on('click', '.panel-heading span.clickable', function(e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
      $this.parents('.panel').find('.panel-body').slideUp();
      $this.addClass('panel-collapsed');
      $this.find('i').removeClass('fa fa-caret-up').addClass('fa fa-caret-down');
    } else {
      $this.parents('.panel').find('.panel-body').slideDown();
      $this.removeClass('panel-collapsed');
      $this.find('i').removeClass('fa fa-caret-down').addClass('fa fa-caret-up');
    }
  })


  // isotope code

  // init Isotope
  // var $grid = $('.grid').isotope({
  //   itemSelector: '.thumbnail',
  //   layoutMode: 'fitRows'
  // });
  //
  // var filterFns = {
  // show if system equals PC
//   PC: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='PC';
//   },
//   PS4: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='Playstation 4';
//   },
//   Xbox1: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='Xbox One';
//   },
//   iOS: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='iOS';
//   },
//   Android: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='Android';
//   },
//   Linux: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='Linux';
//   },
//   PS3: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='Playstation 3';
//   },
//   Xbox360: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='Xbox 360';
//   },
//   Macintosh: function() {
//     var system = $(this).find('.systemName').text();
//     return system ==='Macintosh';
//   }
// };

  // filter items on button click
  // $('.filter-button-group').on( 'click', 'input', function() {
  //   console.log("I'm here");
  //   var filterValue = this.value;
  //   console.log(filterValue);
    // use filter function if value matches
    // filterValue = filterFns[ filterValue ] || filterValue;
    // console.log(filterValue);
  //   $grid.isotope({ filter: filterValue });
  // });



});
