class Programmer{
  constructor(name, language = "Ruby"){
    this.name = name;
    this.language = language;
  }
  evangelize(){
    return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
  }
}

export function addJavaScript(array){
  var newList = array.slice(0);
  newList.push("JavaScript");
  return newList;
}

export default Programmer;
export var bestLanguages = ["Ruby", "Elixir"];