# Platzom

Platzom es un idioma inventado para el [Curso de Fundamentos de JS](https://platzi.com/js) de platzi

## Descripción del idioma
- Si la palabra termina con "ar", se le quitan esas dos letras.
  ejemplo:
    paltzom("Programar") //devuelve "Program"
- Si la palabra inicia con Z, se le añade "pe" al final.
  ejemplo:
    platzom("zorro") //devuelve "zorrope"
    platzom("zarpar") //devuelve "zarppe", por la regla 1
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guion medio.
  ejemplo:
    platzom("abecedario") //devuelve "abece-dario"
- Por último, si la palabra original es un palíndromo, 
   ninguna regla anterior cuenta y se devuelve la misma palabra 
   pero intercalando letras mayúsculas y minúsculas.
  ejemplo:
    platzom("sometemos") // devuelve "SoMeTeMoS"

## Instalación

```
npm install platzom
```

## Uso
```
import platzom from 'platzom'

console.log(platzom('Programar')); //Program
console.log(platzom('Zorro')); // Zorrope
console.log(platzom('Zarpar')); // Zarppe
console.log(platzom('abecedario')); // abece-dario
console.log(platzom('sometemos')); // SoMeTeMoS
```

## Créditos

- [Francisco Huacho](https://twitter.com/@JhersonHuacho)

##  Licencia
[MIT](https://opensource.org/licenses/MIT) 