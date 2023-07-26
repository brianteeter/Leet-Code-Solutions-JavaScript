const assert = require('assert');


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x == undefined || x.length == 0)
    {
        return false;
    }
    
    let original_string = x.toString();
    
    // Take the string and flip it.  If its the same, then
    // its a palindrome:
    let splitString = original_string.split("");
    let reverseArray = splitString.reverse();
    let reverse_string = reverseArray.join("");
    
    return (original_string === reverse_string);
    
};



describe('9_IsPalindrome.js', function ()
{
    it('should return true', function ()
    {
        let results = isPalindrome(12221);
        
        assert.deepEqual(true, results);
    });
    
    it('should return false', function ()
    {
        let results = isPalindrome(123123123123);
        
        assert.deepEqual(false, results);
    });
});
