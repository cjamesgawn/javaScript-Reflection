const input = document.querySelector('#email-input');
const field = document.querySelector('#email-field');


let activeImg = ``;

function searchImages(){
    var clientId = '7mLGkdcJUsLvwq_PO2_pa3s_nkXqiQhac32gYI_0RKs';
    var query =  document.querySelector('#query-input').value;
    var url = 'https://api.unsplash.com/photos/random/?client_id='+clientId+'&query='+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            let result = `<img src="${data.urls.regular}">`;
            activeImg = `${data.urls.regular}`;
            if($('.image-wrapper').length != 0){

              $('.image-wrapper').html(result);


            }

            else {

              $('.content').prepend('<div class="image-wrapper"></div>');
              $('.image-wrapper').html(result);

            }

        });


}
function saveImage(){



  if(document.getElementById(`${input.value}`)) {

    var liActive = document.getElementById(`${input.value}`);
    var image = document.createElement("img");
    image.src = activeImg;
    $('#saveList li').each(function(){

      if($(this).is(liActive)){

        if($('.wrapper-images').length == 0) {

          $(this).append('<div class="wrapper-images"></div>');

        }

        if($(this).find('img[src="'+ image.src +'"]').length == 0) {

        $(this).find('img').each(function(){

          if(image.src != $(this).attr('src')) {

            $('.wrapper-images').append(image);


          }

        });

      }

      }

    });

  } else {

    var li = document.createElement("li");
    var img = document.createElement("img");
    var p = document.createElement("p");

    p.textContent = input.value;
    img.src = activeImg;
    $('#saveList').prepend('<li id="' + input.value + '"><p>'+ input.value +'</p><div class="wrapper-images"><img src="'+ img.src +'"/></div></li>');
    // li.append('');
    // li.prepend(p);
    // li.id = input.value;

    // $("#saveList").prepend(li);
  }
}

function checkForm(form)
  {
    if(input.value == "") {
      input.classList.add('empty-invalid');
      form.inputfield.focus();

      return false;
    }

    var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if(!re.test(input.value)) {
      input.classList.add('email-invalid');
      input.focus();
      form.prepend();
      return false;
    }

    return true;

  }




$('#email-field').submit(function(event){
    event.preventDefault();
    field.className = "";

    if($('.image-wrapper').length == 0) {

      $('#email-field').prepend('<p class="notification error">Please Search For An Image First</p>');

    }

    checkForm();
    if(checkForm() == true){
      if(!activeImg == '')
      {
        saveImage();
      }
    }
});

$('#searchField').submit(function(e){
    e.preventDefault();
    searchImages();
});
