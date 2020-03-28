const replaceByItem = (array, currentItem, newItem) => {
    return array.map((item) => {
        item === currentItem ? item = newItem : item = item
        return item
    })
}
const arr = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(replaceByItem(arr, 'b', 't'))