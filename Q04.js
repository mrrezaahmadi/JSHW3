const findByItem = (arrs, item) => {
    return `index: ${arrs.indexOf(item)}, item: ${item}`
}

console.log(findByItem([2, 3, 4], 3))