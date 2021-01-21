const geringozo = function(str){

    var newStr = ""
    for (let index = 0;index < str.length;index++){
        switch(str.charAt(index)){
            case "a" : 
            case "o" : 
            case "e" :
            case "A" : 
            case "O" : 
            case "E" :
            case "I" :
            case "i" : newStr = newStr.concat(str.charAt(index) + "p" + str.charAt(index))
                break
            case "U" : 
            case "u" : newStr = !isSpecialCase(index, str) ? newStr.concat(str.charAt(index)) + "p" + str.charAt(index) : newStr.concat(str.charAt(index))
                break
            default : newStr += str.charAt(index)
        }
    }
    return newStr
}

module.exports = geringozo

const isSpecialCase = function(index, str){
    let validIndex = index-1 >= 0
    if (validIndex){
        return (str.charAt(index-1) == "q" || str.charAt(index-1) == "g")
    }  
    return false
}
