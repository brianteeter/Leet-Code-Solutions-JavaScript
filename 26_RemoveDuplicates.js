const assert = require('assert');


/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of
 * the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums)
{
    if (nums == undefined || nums.length == 0)
    {
        return 0;
    }
    
    let original_count = nums.length;
    let duplicate_count = 0;
    let seen_values_hash = {};
    let next_value = undefined;
    
    for (let i = 0; i < nums.length; i++)
    {
        next_value = nums[i];
        
        // Check if we've seen this before, if so remove it:
        if (seen_values_hash[next_value] != undefined)
        {
            nums[i] = undefined;
            duplicate_count++;
        }
        else
        {
            seen_values_hash[next_value] = 1;
        }
    }
    
    // Sort the original array to get the numbers in the front:
    nums.sort(function(a, b)
    {
        return a - b
    });
    
    return (original_count - duplicate_count);
};


describe('26_RemoveDuplicates.js', function ()
{
    it('should return 2', function ()
    {
        let results = removeDuplicates([1,1,2]);
        assert.deepEqual(2, results);
    });
    
    it('should return 5', function ()
    {
        let results = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
        assert.deepEqual(5, results);
    });
});
