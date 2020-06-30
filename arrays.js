/**
 * Arrays
 * All of your answers should be stored in
 * variables matching the question numbers (q1, q2, etc.)
 *
 * (e.g.) const q1 = 'my answer here';
 */

/**
 * QUESTION 1
 * Create an array of image sources.
 * Use image1.png, image2.png, and image3.png as the array values.
 */
const q1 = ["image1.png", "image2.png", "image3.png"]
console.log(q1)
/**
 * QUESTION 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */
const q2 = q1[0]
// const q2 = q1.shift()
console.log(q2)

/**
 * QUESTION 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */
const q3 = q1.length
console.log(q3)
/**
 * QUESTION 4
 * Using the array from Question 1,
 * store the last element of the array
 * in variable q4.
 * Hint: How can we get the number of elements in the array?
 */
// const q4 = q1[q1.length - 1]
const q4 = q1.slice().pop()
console.log(q4)
console.log(q1)
/**
 * QUESTION 5
 * Using the array from Question 1,
 * add the item, image4.png to the array.
 * Store the result in variable q5.
 * Hint: Refer to the array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
q1.push('image4.png')
const q5 = q1
// q1.push('image4.png')
// let q5 = q1[q1.length - 1]
console.log("Q5",q5)
/**
 * QUESTION 6
 * Using the array from Question 1,
 * remove the image2.png and image3.png from the array.
 * Store the result in variable q6.
 * Hint: Refer to the array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
// const q6 = q1.splice(1, 2)
const q6 = q1.splice(1, 2)
console.log(q6)
console.log(q1)