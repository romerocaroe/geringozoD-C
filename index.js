const geringozo = function(str){
    var newString = ""
    for (let index = 0;index < str.length;index++){
        let character = str.charAt(index);
        switch(character){
            case "a" : 
            case "o" : 
            case "e" :
            case "A" : 
            case "O" : 
            case "E" :
            case "I" :
            case "i" : newString = newString.concat(character + "p" + character)
                break
            case "U" : 
            case "u" : newString = !isSpecialCase(index, str) ? newString.concat(character) + "p" + character : newString.concat(character)
                break
            default : newString += str.charAt(index)
        }
    }
    return newString
}

module.exports = geringozo

const isSpecialCase = function(index, str){
    let validIndex = index-1 >= 0
    if (validIndex){
        return (str.charAt(index-1) == "q" || str.charAt(index-1) == "g")
    }  
    return false
}
