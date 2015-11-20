import Ember from 'ember';
//don't need full path if it's a module. use it to
//be able to call Ember library on things. 

export default class Programmer{
  constructor(name, language = "Ruby"){
    this.name = name;
    this.language = language;
  }
  evangelize(){
    return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }
}

export function addJavaScript(languages){
  // var newList = array.slice(0);
  // newList.push("JavaScript");
  // return newList;
  let newArray = Ember.copy(languages);
  return newArray.pushObject("JavaScript");
}

export var bestLanguages = ["Ruby", "Elixir"];
