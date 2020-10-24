/*global jQuery*/
(function($) {
  'use strict';

  var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function() {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });
  $(document).ready(function() {
    $('.filter-button').click(function() {
      var value = $(this).attr('data-filter');

      if (value === 'all') {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
      } else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $('.filter')
          .not('.' + value)
          .hide('3000');
        $('.filter')
          .filter('.' + value)
          .show('3000');
      }
    });

    if ($('.filter-button').removeClass('active')) {
      $(this).removeClass('active');
    }
    $(this).addClass('active');
  });
})(jQuery);

var btnContainer = document.getElementById('sidebar');
var btns = btnContainer.getElementsByClassName('butn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active1');
    current[0].className = current[0].className.replace(' active1', '');
    this.className += ' active1';
  });
}

const addLiveTextEl = document.querySelector('#addCommOthers');
const locationContainer1 = document.querySelector('#gridRadios2');
const locationContainer2 = document.querySelector('#gridRadios3');
//const locationRadio = document.querySelectorAll("[name='addcomm']");

function displayText(evt) {
  let clickedValue = evt.target.value;
  if (clickedValue === 'others') {
    addLiveTextEl.classList.remove('is-hidden');
  } else {
    addLiveTextEl.classList.add('is-hidden');
  }
}

locationContainer1.addEventListener('click', displayText);
locationContainer2.addEventListener('click', displayText);
