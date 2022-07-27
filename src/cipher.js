const cipher = { encode, decode };

function encode(offset, message){
  let converterTexto = "";
  for (let i = 0; i < message.length; i++) {
    let numAscii = ((message.charCodeAt(i) - 65 + offset) % 26) + 65;
    converterTexto += String.fromCharCode(numAscii);    
  }
  
  return converterTexto;

};

function decode(offset, message) {
  let converterTexto = "";
  for (let i = 0; i < message.length; i++) {
    let numAscii = ((message.charCodeAt(i) - 90 + offset) % 26) + 90;
    converterTexto += String.fromCharCode(numAscii);    
  }
  return converterTexto;
};

export default cipher;
