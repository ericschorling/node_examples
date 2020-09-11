//greatest common divisor

function greatestDivisor(num1, num2){
    returnNum = 0;
    let top = 0;
    num1 > num2 ? top = num1 : top = num2 
    for (let i = 1; i <= top; i++ ){
        if (num1 % i === 0 && num2 % i === 0){
            returnNum = i
        }
    }
    return returnNum 
}

//console.log(greatestDivisor(20, 35))

//bubble sort

function bubbleSort(arr){
    let holder;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (arr[i] < arr[j]){
                holder = arr[j]
                arr[j] = arr[i]
                arr[i] = holder
            }
        }
    }
    return arr
}

//console.log(bubbleSort([1,3,5,4,3,2,6,7,8,9,33]))

//return longest word

function longest_word (str){
    let strArr = str.split(' ')
    let length = 0
    for (let i = 0; i< strArr.length; i++){
        if (strArr[i].length > length){
            length = strArr[i].length
        }
    }
    return length
}
//console.log(longest_word('this is a sentence with words'))

// greatest common divisor
function greatest_div (num1, num2){
    let returnNum = 1
    let bottom = num1
    if (num2 < num1){
        bottom = num2
    }
    for (let i = 1; i<=bottom/2; i++ ){
        if(num1 % i === 0 && num2 % i === 0){
            returnNum= i
        }
    }
    return returnNum
}

//console.log(greatest_div(202132,1239012))

//write a program for grading students

function grading(grade){
    if(grade >= 90){
        console.log('Grade is A')
    }
    else if (grade >= 80 && grade <= 89){
        console.log('Grade is a B')
    }
    else if (grade >= 70 && grade <= 79){
        console.log('Grade is C')
    }
    else if (grade >= 60 && grade <= 69){
        console.log('Grade is D')
    }
    else if (grade >= 0 && grade <= 69){
        console.log('Grade is F')
    }
    else {
        console.log('you didn\'t enter a real grade')
    }
}
//grading(78)

function greg_leapyear (year){
    
    if (year % 4 === 0){
        if (year % 100 === 0){
            if(year % 400 === 0)
            {return true}
            else {return false}
        }
        return true
    }
    return false
}

//console.log(greg_leapyear(1900))

//check palindrome
function palindrome (str){
    let revstr = str.split('').reverse().join(``)
    console.log(revstr)
    console.log(revstr === str)
}

//palindrome('race car')

function sorting_bubbles (arr){
    let holder;
    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j <arr.length; j++){
            if(arr[i]<arr[j]){
                holder = arr[j]
                arr[j] = arr[i]
                arr[i] = holder
            }
        }
    }
    return arr;
}

//console.log(sorting_bubbles([1,5,4,7,9,900,22,3,4]))

function pig_latin (str){
    const strArr = str.split('')
    const vowelArr = ['a','e','i','o','u']
    let holderArr = []
    let returnStr = ''

    if(vowelArr.indexOf(strArr[0].toLowerCase()) !== -1){
        return strArr.join('') + 'way'
    }
    else {
        for(let i = 0; i < strArr.length; i++){
            if(vowelArr.indexOf(strArr[i].toLowerCase()) === -1){
                console.log(strArr)
                holderArr.push(strArr[i])
            }
            else{
                console.log(strArr.splice(0,i))
                break;
            }
        }
    }
    returnStr = [...strArr, ...holderArr].join('') + 'ay'
    return returnStr
}

console.log(pig_latin('glaway'))