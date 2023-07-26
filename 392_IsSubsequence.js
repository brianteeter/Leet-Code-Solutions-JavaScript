const assert = require('assert');


/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * A subsequence of a string is a new string that is formed from the original string by deleting some
 * (can be none) of the characters without disturbing the relative positions of the remaining characters.
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    if (s == undefined || s == '')
    {
        return true;
    }
    
    let substr_ptr = 0;
    
    // Step through the main string to see if we find matches
    // to the substring:
    for (let i = 0; i < t.length; i++)
    {
        // Check to see if this char matches the next
        // character in the substring
        if (t[i] == s[substr_ptr])
        {
            // Check to see if this is the last substring char, and
            // if it is return true as we found the substring:
            if (substr_ptr == s.length - 1)
            {
                return true;
            }
            
            substr_ptr++;
        }
    }
    
    // If we make it here we didn't find the substring:
    return false;
};


describe('392_IsSubsequence.js', function ()
{
    it('should return true', function ()
    {
        let results = isSubsequence( "abc", "ahbgdc")
        assert.deepEqual(true, results);
    });
    
    it('should return false', function ()
    {
        let results = isSubsequence("abc", "akxioapxxc")
        assert.deepEqual(false, results);
    });
    
    it('should return false', function ()
    {
        let results = isSubsequence("acb", "ahbgdc")
        assert.deepEqual(false, results);
    });
    
});
