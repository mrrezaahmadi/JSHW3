const combineArr = (...list) => {
    console.log(list.flat().sort())
}

combineArr([1, 2, 3], [6, 5, 4], [9, 8, 7, 0])