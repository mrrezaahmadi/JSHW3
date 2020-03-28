const deleteByIndex = (arr, index) => {
    arr.splice(index, 1)
}

const list = [1, 2, 3, 4, 5, 6]

deleteByIndex(list, 3)

console.log(list)