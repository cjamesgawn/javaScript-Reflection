// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }
  
// function validate() {

//     const div = document.createElement('div');

//     const $result = $("#result");
//     const email = $("#email").val();
//     $result.text("");
  
//     if (validateEmail(email)) {

//         div.className = 'item';
//         div.innerHTML = `
//         <img src="https://picsum.photos/350/350">
//         <h3>Email:</h6>
//         <p id="email"></p>
//         `;

//         document.getElementById('result').appendChild(div);

//         $result.text(email + " is valid :)");
//         $result.css("color", "green");
//     } else {
//         $result.text(email + " is not valid :(");
//         $result.css("color", "red");
//     }
//     return false;
// }
  
// $("#validate").on("click", validate);




// function addRow() {
//     const div = document.createElement('div');
  
//     div.className = 'row';
  
//     div.innerHTML = `
//       <input type="text" name="name" value="" />
//       <input type="text" name="value" value="" />
//       <label> 
//         <input type="checkbox" name="check" value="1" /> Checked? 
//       </label>
//       <input type="button" value="-" onclick="removeRow(this)" />
//     `;
  
//     document.getElementById('content').appendChild(div);
//   }
  
//   function removeRow(input) {
//     document.getElementById('content').removeChild(input.parentNode);
//   }






// function addRow() {
//     const div = document.createElement('div');
  
//     div.className = 'row';
  
//     div.innerHTML = `
//       <input type="text" name="name" value="" />
//       <input type="text" name="value" value="" />
//       <label> 
//         <input type="checkbox" name="check" value="1" /> Checked? 
//       </label>
//       <input type="button" value="-" onclick="removeRow(this)" />
//     `;
  
//     document.getElementById('content').appendChild(div);
//   }
  
//   function removeRow(input) {
//     document.getElementById('content').removeChild(input.parentNode);
//   }




function addRow() {
    const div = document.createElement('div');
  
    div.className = 'row';
  
    div.innerHTML = `
        <img src="https://picsum.photos/350/350" alt="">
        <h3>Email:</h6>
        <p id="email"></p>
    `;
  
    document.getElementById('results').appendChild(div);
  }
  
  function removeRow(input) {
    document.getElementById('results').removeChild(input.parentNode);
  }