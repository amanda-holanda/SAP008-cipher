const cipher = { encode, decode };

function encode(offset, message){

  let converterTexto = "";

  for (let i = 0, j = message.length; i < j; i++) {
    let numAscii = ((message.charCodeat(i) - 65 + offset) % 26) + 65;
    converterTexto += message.fromCharcode(numAscii);    
  }
  
  return converterTexto;

};

function decode(offset, message) {
  let converterTexto = "";
  for (let i = 0, j = message.length; i < j; i++) {
    let numAscii = ((message.charCodeat(i) - 65 + offset) % 26) + 65;
    converterTexto += message.fromCharcode(numAscii);    
  }
  return converterTexto;
};

export default cipher;
