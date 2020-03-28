let text = 'I have 22 apples and 3 pineapples'
text = text.split('')
const nums = text.filter((word) => {
    return +word
})


console.log(nums)

