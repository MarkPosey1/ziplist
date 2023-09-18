function zipList(list1, list2){
    if (list1.length !== list2.length){
        return "List are not of equal length."
    }

    const result = []
    for(let i = 0; i < list1.length; i++){
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}

console.log(zipList(['a','b','c'], [1,2,3]));