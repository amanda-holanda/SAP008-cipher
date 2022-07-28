import cipher from './cipher.js';

const cifrar = document.querySelector('#btnEncode')

cifrar.addEventListener('click', function(e) {
    e.preventDefault();
    
    let offset = parseInt(document.querySelector('#offset').value) ;

    let message = document.querySelector('#message').value ;
    message = message.toUpperCase();

    let resultEncode = cipher.encode(offset, message);
    document.getElementById('cipherMessage').innerHTML = resultEncode;

    console.log(resultEncode);
});

const decifrar = document.querySelector('#btnDecode');

decifrar.addEventListener('click', function(e) {
    e.preventDefault();

    let offset = parseInt(document.querySelector('#offset').value) ;
    let message = document.querySelector('#cipherMessage').value ;
    message = message.toUpperCase();
    
    let resultDecode = cipher.decode(offset, message);
    document.getElementById('message').innerHTML = resultDecode;

    console.log(resultDecode);
});


