// //toggle

// $(function(){
// $('#toggleBtn').on('click', function(){
//  $('#myParagraph').toggle()
// })

// })
// //----------------


// $(function(){
// $('h2').on('mouseover', function(){
// $(this).css({'color': 'blue', 'background-color': 'red'});
// })

// $('h2').on('mouseleave', function(){
// $(this).css({'color': '', 'background-color': ''});
//  })
//  }
// )

// //-----------------------

 
//  $(function(){
//   $('#addItem').on('click', function(){
//    const itemText = $('#newItem').val().trim();
//    if(itemText !== ''){
//     $('#itemList').append('<li>' + itemText + '</li>')
//     $('#newItem').val('')
//    }
//   })
//  })

//  //----------------

//  $(function(){
//   $('#fadeDiv').on('click', function(){
//   $(this).fadeOut(1000);
//   })
//  })
 
 //---------------

 $(function(){
  $('.accordion-header').on('click', function(){
   $('.accordion-content').slideUp();
   if(!$(this).next('.accordion-content').is(':visible')){
      $(this).next('.accordion-content').slideDown()
    };
  });
      });

      //  $(function() {
//   $(".header").on('click', function() {
//     const content = $(this).next(".content");
    
//     $(".content").slideUp();

    
//     if (!content.is(":visible")) {
//       content.slideDown();
//     }
//   });
// });