var assert = require('assert');

/**
 * Given an integer array nums, rotate the array to the right by k steps,
 * where k is non-negative.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k)
{
    // Copy the array:
    let temp = [...nums];
    
    
    // For each element in temp put it in the original in the
    // correct location:
    for(let i = 0; i < temp.length; i++)
    {
        let p = (i+k) % temp.length;
        nums[p] = temp[i];
    }
    
    return nums;
};

/**
 * This function below was my original solution but it was too slow on large
 * sets of numbers, which is odd, since it uses the most straightforward
 * built in array functions.
 *
 * @param nums
 * @param k
 */
var rotateTooSlow = function(nums, k)
{
    // Check inputs, nothing needs to be done in these cases:
    if (k == 0 || nums == undefined || nums.length <= 0)
    {
        return;
    }
    
    let next_value = undefined;
    
    // To rotate pop from the end push (unshift) to the start:
    for (let i = 0; i < k; i++)
    {
        nums.unshift(nums.pop());
    }
};

describe('189_RotateArray.js', function ()
{
    it('should return [5,6,7,1,2,3,4]', function ()
    {
        let results = rotate([1,2,3,4,5,6,7], 3);
        assert.deepEqual([5,6,7,1,2,3,4], results);
    });
    
});
