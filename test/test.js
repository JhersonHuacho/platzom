/*
este no corre código de ES2015 por default.

*/
const expect = require('chai').expect;
const platzom = require('..').default; //de acuerdo al main que esta en el archivo package.json

//ahora describir los test que es lo que se tiene que hacer y que es lo que se tienen que devolver

describe('#platzom', function() {
  it ('Si la palabra termina en "ar", se le quitan esos 2 caracteres.', function() {
    const translation = platzom('Programar');
    expect(translation).to.equal('Program');
  })
  it ('Si la palabra inicia con Z, se le añade "pe" al final.', function() {
    const translation = platzom('Zorro');
    const translation2 = platzom('Zarpar');

    expect(translation).to.equal('Zorrope');
    expect(translation2).to.equal('Zarppe');
  })
  it ('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guion medio.', function() {
    const translation = platzom('abecedario');
    expect(translation).to.equal('abece-dario');
  })
  it ('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.', function() {
    const translation = platzom('sometemos');
    expect(translation).to.equal('SoMeTeMoS');
  })
});
