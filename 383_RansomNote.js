const assert = require('assert');


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    // Check Inputs:
    if (ransomNote == undefined || magazine == undefined)
    {
        return false;
    }
    
    // Split the Strings into characters in an Array and a Set
    // for fast lookups:
    let rn_chars = ransomNote.split("");
    
    let mg_chars = {};
    let next_mg_char = undefined;
    
    for (let j = 0; j < magazine.length; j++)
    {
        next_mg_char = magazine[j];
        if (mg_chars[next_mg_char] == undefined)
        {
            mg_chars[next_mg_char] = 1;
        }
        else
        {
            mg_chars[next_mg_char]++;
        }
    }
    
    let next_rn_char = undefined;
    
    for (let i = 0; i < rn_chars.length; i++)
    {
        next_rn_char = rn_chars[i];
        
        if (mg_chars[next_rn_char] && mg_chars[next_rn_char] >= 1)
        {
            mg_chars[next_rn_char]--;
            continue;
        }
        else
        {
            // We found a character in the note that's not in the
            // magazine which is a failure:
            return false;
        }
    }
    
    // We didn't find any chars we need not in the magazine, so we
    // can return true:
    return true;
};


describe('383_RansomNote.js', function ()
{
    it('should return true', function ()
    {
        let results = canConstruct( "aa", "aab");
        assert.deepEqual(true, results);
    });
    
    it('should return false', function ()
    {
        let results = canConstruct("aa", "ab");
        assert.deepEqual(false, results);
    });
    
});
