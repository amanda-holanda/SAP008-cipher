import cipher from './cipher.js';

const cifrar = document.querySelector('#btnEncode')

cifrar.addEventListener('click', function(e) {
    e.preventDefault();
    
    let offset = parseInt(document.querySelector('#offset').value) ;

    let string = document.querySelector('#message').value ;
    string = string.toUpperCase();

    let resultEncode = cipher.encode(offset, string);
    document.getElementById('cipherMessage').innerHTML = resultEncode;    
});

const decifrar = document.querySelector('#btnDecode');

decifrar.addEventListener('click', function(e) {
    e.preventDefault();

    let offset = parseInt(document.querySelector('#offset').value) ;
    let string = document.querySelector('#cipherMessage').value ;
    string = string.toUpperCase();
    
    let resultDecode = cipher.decode(offset, string);
    document.getElementById('message').innerHTML = resultDecode;    
});


