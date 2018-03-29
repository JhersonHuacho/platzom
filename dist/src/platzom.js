'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
//export default function platzom(str) {} =>  import platzom from 'platzom'
//export function platzom(str) {}         =>  import { platzom } from 'platzom'

function platzom(str) {
  var translation = str;
  //Regla 01
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }
  //Regla 02
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  //Regla 03
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }
  //Regla 04
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
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