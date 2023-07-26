const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums)
{
    if (nums == undefined || nums.length == 0)
    {
        return false;
    }
    
    // We'll use this hash object to store if we found a value:
    var hash = {};
    
    for (let i = 0; i < nums.length; i++)
    {
        if (hash[nums[i]] != undefined)
        {
            return true;
        }
        else
        {
            hash[nums[i]] = 1;
        }
    }
    
    return false;
};

describe('217_ContainsDuplicate.js', function ()
{
    it('should return true', function ()
    {
        let results = containsDuplicate([0,1,2,0]);
        
        assert.deepEqual(true, results);
    });
    
    it('should return false', function ()
    {
        let results = containsDuplicate([0,1,2,3,4,5,6,67,89]);
        
        assert.deepEqual(false, results);
    });
});
