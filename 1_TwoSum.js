const assert = require('assert');


/**
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target)
{
    if (nums == undefined)
    {
        return;
    }
    
    let results = [];
    
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = 1; j < nums.length; j++)
        {
            if (i == j)
            {
                continue;
            }
            if ((nums[i] + nums[j] ) == target)
            {
                results.push(i);
                results.push(j);
                return results;
            }
        }
    }
};


describe('1_TwoSum.js', function ()
{
    it('should return [0, 1]]', function ()
    {
        let nums = [2,7,11,15];
        let target = 9;
    
        var results = twoSum(nums, target);
        assert.deepEqual([0, 1], results);
    });
});
