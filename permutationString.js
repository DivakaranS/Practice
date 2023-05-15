//program to permutation of string 

const permutationString = (str) => {

    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('')
        .reduce((acc, cur, i) => 

            acc.concat(permutationString(str.slice(0, i) + str.slice(i + 1))
     
                .map(val => cur + val)),[]);
}

console.log(permutationString('ABC'));

console.log(permutationString('ABCDEF'));