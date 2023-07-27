const assert = require('assert');

/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s)
{
    let set = new Set();
    let left = 0;
    let maxSize = 0;
    
    if (s.length <= 1)
    {
        return s.length
    }
    
    for (let i = 0; i < s.length; i++)
    {
        while (set.has(s[i]))
        {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
};



describe('3_LongestSubstrWithoutRepeats.js', function ()
{
    it('should return 3', function ()
    {
        let results = lengthOfLongestSubstring("abcbcbb");
        assert.deepEqual(3, results);
    });
    
    it('should return 1', function ()
    {
        let results = lengthOfLongestSubstring("bbbbb");
        assert.deepEqual(1, results);
    });
    
    it('should return 3', function ()
    {
        let results = lengthOfLongestSubstring("pwwkew");
        assert.deepEqual(3, results);
    });
    
    it('should return 3', function ()
    {
        let results = lengthOfLongestSubstring("dvdf");
        assert.deepEqual(3, results);
    });
    
});

