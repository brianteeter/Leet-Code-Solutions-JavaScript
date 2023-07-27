const assert = require('assert');

/**
 * Given two strings needle and haystack, return the index of the first occurrence
 * of needle in haystack, or -1 if needle is not part of haystack.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    return haystack.indexOf(needle);
    
};


describe('28_FindFirstIndexOfString.js', function ()
{
    it('should produce 3', function ()
    {
        let result = strStr("abcxyz", "bc");
        
        assert.deepEqual(1, result);
    });
});
