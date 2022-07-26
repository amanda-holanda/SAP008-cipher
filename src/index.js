import cipher from './cipher.js';

const cifrar = document.querySelector('#btnEncode')

cifrar.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("oiola");

    let offset = parseInt(document.querySelector('#offset').value) ;

    let message = document.querySelector('#message').value ;
    message = message.toUpperCase();

    let result = cipher.encode(offset, message);
    document.getElementById('cipherMessage').innerHTML = result;

    //console.log(result);
});

const decifrar = document.querySelector('#btnDecode');

decifrar.addEventListener("click", function(e) {
    e.preventDefault();

    let offset = parseInt(document.querySelector('#offset').value) ;
    let message = document.querySelector('#message').value ;
    
    let result = cipher.decode(offset, message);
    document.getElementById('cipherMessage').innerHTML = result;

    //console.log(result);
});


