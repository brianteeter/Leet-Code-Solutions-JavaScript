const assert = require('assert');


function reverseString(str)
{
    return str.split("").reverse().join("");
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    // Check Inputs:
    if (s == undefined)
    {
        return false;
    }
    
    // Strip non alpha-numeric characters:
    let stripped = s.toLowerCase();
    stripped = stripped.replace(/[^a-z0-9]/gi, '');
    
    // Now we just have the characters we care about.  Lets compare
    // forward and backward:
    let reverse_stripped = reverseString(stripped);
    
    if (reverse_stripped === stripped)
    {
        return true;
    }
    else
    {
        return false;
    }
};



describe('125_ReversePalindrome.js', function ()
{
    it('should return true', function ()
    {
        let results = isPalindrome(("MCMCM"));
        assert.deepEqual(true, results);
    });
    
    it('should return true 2', function ()
    {
        let results = isPalindrome(("abc cba"));
        assert.deepEqual(true, results);
    });
    
    it('should return false', function ()
    {
        let results = isPalindrome(("this is not a palindrome"));
        assert.deepEqual(false, results);
    });
    
});
