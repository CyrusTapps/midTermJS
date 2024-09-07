function ageToAbilities(age) {
    if (age < 16) {
        return "You can't drive";
    } else if (age >= 16 && age < 18) {
        return "You can drive but note vote."
    } else if (age >= 18 && age <= 24) {
        return "You can vote but not rent a car."
    } else {
        return "You can do pretty much anything"
    }
};
// console.log(ageToAbilities(10));
// console.log(ageToAbilities(25));



function oddIndicies(arr) {
    return arr.filter((item, index) => index % 2 !== 0);
};
// console.log(oddIndicies([0,2,4,6,8,10]));
// console.log(oddIndicies([1]));
// console.log(oddIndicies([100,101,102]));



function numOddValues(arr) {
    return arr.filter(item => item % 2 !== 0).length;
};
// console.log(numOddValues([0,1,2,3]))
// console.log(numOddValues([5,5,5,5]))
// console.log(numOddValues([]))



function averageStringLength(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    return sum / arr.length;
};
// console.log(averageStringLength(['oh', 'hello']));
// console.log(averageStringLength([]));
// console.log(averageStringLength(['a', 'pleasant', 'string']));



function firstPunctuationIndex(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === '?' || str[i] === '!') {
            return i;
        }
    }
    return -1;
};
// console.log(firstPunctuationIndex('wow! goodness me.'));
// console.log(firstPunctuationIndex('I love taking tests?'));
// console.log(firstPunctuationIndex('...hello?'));
// console.log(firstPunctuationIndex('alright alright alright'));



function getPlace(sorted, score) {
    let place = sorted.length + 1;
    for (let i = 0; i < sorted.length; i++) {
        if (score > sorted[i]) {
            place = i + 1;
            break;
        }
    }
    switch (place) {
        case 1: return '1st place';
        case 2: return '2nd place';
        case 3: return '3rd place';
        default: return `${place}th place`;
    }
};
// console.log(getPlace([60, 30, 10], 90));
// console.log(getPlace([60, 30, 10], 50));
// console.log(getPlace([60, 30, 10], 15));
// console.log(getPlace([500, 300, 200], 100));


// let obj = {
//     user: 'teacher',
//     birthday: 'January 1st',
//     favoriteColor: 'yellow'
// };

// let keyArr = Object.keys(obj); // keys = [key, key, key] //
// let valArr = []; //arr to push obj.key value to; probably unecessary //

function addToObj(obj, key, value) {
    if (typeof key !== "string") {
        return 'Function must be called with a valid key.';
    }
    obj[key] = value;
}


let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow'
};

// addToObj(obj, 'homeState', 'tennessee');
// console.log(obj);

// addToObj(obj, 'parentsNames', {mother: 'Janine', father: 'Robert'});
// console.log(obj);

// addToObj(obj, 'user', 'student');
// console.log(obj);

// console.log(addToObj(obj, true, 'student'));


function duplicateElements(arr) {
    const counter = {}; 
    const result = []; 

    
    arr.forEach(num => {
        counter[num] = (counter[num] || 0) + 1;
    });

    
    for (const num in counter) {
        if (counter[num] > 1) {
            result.push(Number(num));
        }
    }

    return result;
};
// const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// console.log(duplicateElements(inputArray));