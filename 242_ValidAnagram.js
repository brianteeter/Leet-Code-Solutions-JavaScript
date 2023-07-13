var assert = require('assert');

function deepEqual(object1, object2)
{
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    
    if (keys1.length !== keys2.length)
    {
        return false;
    }
    
    for (const key of keys1)
    {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
        )
        {
            return false;
        }
    }
    
    return true;
}

function isObject(object)
{
    return object != null && typeof object === 'object';
}


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t)
{
    if (s == undefined || t == undefined || s.length == 0 || t.length == 0)
    {
        return false;
    }
    
    let s_hash = {};
    let t_hash = {};
    
    // Create a hash to count the instances of characters in each string,
    // if we get the exact same hash at the end, they are anagrams:
    for (let i = 0; i < s.length; i++)
    {
        if (s_hash[s[i]] == undefined)
        {
            s_hash[s[i]] = 1;
        }
        else
        {
            s_hash[s[i]]++;
        }
    }
    for (let j = 0; j < t.length; j++)
    {
        if (t_hash[t[j]] == undefined)
        {
            t_hash[t[j]] = 1;
        }
        else
        {
            t_hash[t[j]]++;
        }
    }
    
    return deepEqual(s_hash, t_hash);
};


describe('242_ValidAnagram.js', function ()
{
    it('should return true', function ()
    {
        let results = isAnagram("abcba", "aabbc");
        assert.deepEqual(true, results);
    });
    
    it('should return false', function ()
    {
        let results = isAnagram("abcba", "aabc");
        assert.deepEqual(false, results);
    });
});
