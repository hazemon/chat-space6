$(function(){ 
  
  function buildHTML(message){
   var image = message.image? `<img src=${message.image} ></img>`:"";
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="upper-message">
           <div class="upper-message__user-name">
             ${message.user_name}
           </div>
           <div class="upper-message__date">
             ${message.date}
           </div>
         </div>
         <div class="lower-message">
           <p class="lower-message__content">
           </p>
           ${image}
         </div>
       </div>`
   };
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

        .done(function(data){
                var html = buildHTML(data);
              $('.main__messages').append(html);
    ScrollToNewMessage();
              $('.main__footer__text').val('');
              $(".main__footer__send-button").prop('disabled', false);
        })
        .fail(function(){
          alert('error');
        });
    });
});