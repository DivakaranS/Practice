//merged two sorted Array using a function ;
const mergeTwoSortedArray = (arr1, arr2) => {
    let merge = [];
    let index = {
        'a': 0,
        'b': 0
    };
    while (index.a < arr1.length || index.b < arr2.length) {
        if (typeof arr1[index.a] === 'undefined') {
            merge.push(arr2[index.b++]);
        } else if (arr1[index.a] > arr2[index.b]) {
            merge.push(arr2[index.b++]);
        } else {
            merge.push(arr1[index.a++]);
        }
    }
    return merge;

}

console.log(mergeTwoSortedArray([2, 5, 11, 13], [1, 2, 3, 29]));