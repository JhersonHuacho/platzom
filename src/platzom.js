//export default function platzom(str) {} =>  import platzom from 'platzom'
//export function platzom(str) {}         =>  import { platzom } from 'platzom'

export default function platzom(str) {
  let translation = str;
  //Regla 01
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0,-2);
  }
  //Regla 02
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  //Regla 03
  let length = translation.length;
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2));
    const secondHalf = translation.slice(Math.round(length / 2));
    translation = `${firstHalf}-${secondHalf}`;
  }
  //Regla 04
  const reverse = (str) => str.split('').reverse().join('');
  function minMay(str) {
    const length = str.length;
    let translation = '';
    let capitalize = true;
    for(let i = 0; i < length; i++) {
      const char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  return translation;
}