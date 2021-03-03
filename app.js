const input = document.querySelector('#email-input');
const field = document.querySelector('#email-field');


let activeImg = ``;

function searchImages(){
    var clientId = '44Z98e1z8r_uY6qbbNoYIEee_qbIvG5wSYqbDa1XYMI';
    var query =  document.querySelector('#query-input').value;
    var url = 'https://api.unsplash.com/photos/random/?client_id='+clientId+'&query='+query;

    fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            let result = `<img src="${data.urls.regular}">`;
            activeImg = `${data.urls.regular}`;
            $('.image-wrapper').html(result);
        });


}
function saveImage(){
  if(document.getElementById(`${input.value}`)) {

    var liActive = document.getElementById(`${input.value}`);
    var image = document.createElement("img");
    image.src = activeImg;
    liActive.prepend(image);

  } else {
    console.log(input.value+" saved: "+activeImg);

    var li = document.createElement("li");
    var img = document.createElement("img");
    var p = document.createElement("p");

    p.textContent = input.value;
    img.src = activeImg;
    li.appendChild(img);
    li.appendChild(p);
    li.id = input.value;

    $("#saveList").prepend(li);
  } 
}

function checkForm(form)
  {
    if(input.value == "") {
      field.classList.add('empty-invalid');
      form.inputfield.focus();

      return false;
    }

    var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

    if(!re.test(input.value)) {
      field.classList.add('email-invalid');
      input.focus();
      return false;
    }

    return true;
  
  }




$('#email-field').submit(function(event){
    event.preventDefault();
    field.className = "";

    checkForm();
    if(checkForm() == true){
      if(!activeImg == '') 
      {
        saveImage();
      }
    }
});

$('#searchField').submit(function(event){
    event.preventDefault();
    searchImages();
});

