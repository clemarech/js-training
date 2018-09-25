'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(assert)
{
 return assert.toString().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() +
 txt.substr(1).toLowerCase();});
}
	//* Begin of tests
	const assert = require('assert')

	assert.strictEqual(typeof jadenCase, 'function')
	assert.strictEqual(jadenCase("hey you"), "Hey You")
	assert.strictEqual(jadenCase("hey you are you ok ?"), "Hey You Are You Ok ?")

	//assert.fail('You must write your own tests')
	// End of tests */
