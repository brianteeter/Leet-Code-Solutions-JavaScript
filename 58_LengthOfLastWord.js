const assert = require('assert');

/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    // Input Check:
    if (s == undefined)
    {
        return 0;
    }
    
    // Split the string into an array of strings:
    let words = s.split(" ");
    
    // Remove any empty strings that can be produced via
    // multiple spaces between words:
    const filteredArr = words.filter(function(element)
    {
        return element !== '';
    });
    
    return filteredArr[filteredArr.length - 1].length;
};


describe('58_LengthOfLastWord.js', function ()
{
    it('should return 7', function ()
    {
        let results = lengthOfLastWord(("The last word is longest"));
        assert.deepEqual(7, results);
    });
    
    it('should return true 5', function ()
    {
        let results = lengthOfLastWord(("Words are fun and stuff"));
        assert.deepEqual(5, results);
    });
    
});
