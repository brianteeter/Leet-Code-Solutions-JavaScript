const assert = require('assert');


/**
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such
 * that each unique element appears at most twice. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the
 * result be placed in the first part of the array nums. More formally, if there are k elements after removing
 * the duplicates, then the first k elements of nums should hold the final result. It does not matter what you
 * leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place
 * with O(1) extra memory.
 *
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var removeDuplicates = function (nums)
{
    if (nums == undefined || nums.length == 0)
    {
        return 0;
    }
    
    let seen_values_hash = {};
    let next_value = undefined;
    
    for (let i = 0; i < nums.length; i++)
    {
        next_value = nums[i];
        
        // Check if we've seen this before, if so remove it:
        if (seen_values_hash[next_value] != undefined)
        {
            seen_values_hash[next_value]++;
            
            if (seen_values_hash[next_value] >= 3)
            {
                nums[i] = undefined;
            }
        }
        else
        {
            seen_values_hash[next_value] = 1;
        }
    }
    
    // Remove undefined in place:
    for (var i = nums.length - 1; i >= 0; i--)
    {
        if (nums[i] === undefined)
        {
            nums.splice(i, 1);
        }
    }
    
    // Sort the original array to get the numbers in the front:
    nums.sort(function(a, b)
    {
        return a - b
    });
    
    return nums.length;
};


describe('80_RemoveDuplicatesV2.js', function ()
{
    it('should return 2', function ()
    {
        let results = removeDuplicates([1,1,1,2,2,3]);
        assert.deepEqual(5, results);
    });
    
    it('should return 5', function ()
    {
        let results = removeDuplicates([0,0,1,1,1,1,2,3,3]);
        assert.deepEqual(7, results);
    });
});
