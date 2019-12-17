
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e"," ");
}
const concatString = (text1, text2) => {
    return `${text1}${text2}`;
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substr(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text === "string";
}

const getExtension = (text) => {
    const array = text.split('.');
    return array[array.length-1];
}
const countSpaces = (text) => {
    let counter = 0;
    for (element of text){
        if(element === " "){
            counter++;
        }
    }
    return counter;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x,y)
}
const absoluteValue = (num) => {
    return num < 0 ? -num : num;
}
const absoluteValueArray = (array) => {
    const newArray = [];
    array.forEach((number)=>{
        number = absoluteValue(number);
        newArray.push(number);
    });
    return newArray;
}
const circleSurface = (radius) => {
    return Math.round((Math.PI * power(radius,2)));
}
const hypothenuse = (ab, ac) => {
    return power(power(ab,2) + power(ac,2),0.5);
}
const BMI = (weight, height) => {
    return parseFloat((weight/power(height,2)).toFixed(2));
}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}