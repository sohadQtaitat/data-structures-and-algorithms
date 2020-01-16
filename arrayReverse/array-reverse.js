


// function sohadReverse(inputArr) {

//     let mainArray = []

//     for(i=inputArr.length-1; i>=0; i--)
//     {
//         mainArray.push(inputArr[i])
//     }
//     return mainArray;
// }



var reverseArray = function(originArray) {

    var arrayLength = originArray.length;
    
    var newArray = new Array();
  
    var j = (arrayLength-1);
  
    for (var i = 0; i < arrayLength; i++) {
      newArray[i] = "";
    }
  
    for (var i = 0; i < arrayLength; i++) {
  
      newArray[j] = originArray[i];
      j--;
  
    }
  
    return newArray;
  
  };