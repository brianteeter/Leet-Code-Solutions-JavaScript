const assert = require('assert');

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n)
{
    // Handle crap inputs:
    if (nums1 == undefined || nums2 == undefined)
    {
        return;
    }
    
    // Replace the last n values of nums1 with the nums2 values:
    for (let i = m; i < (m + n); i++)
    {
        nums1[i] = nums2[i - m];
    }
    
    // Sort in ascending order:
    nums1 = nums1.sort(function(a,b){
        if (a > b)
        {
            return 1;
        }
        else if (a < b)
        {
            return -1;
        }
        else
        {
            return 0;
        }
    });
    
    console.log("Results nums1: " + JSON.stringify(nums1));
    
    
};


describe('88_MergeSortedArrays.js', function ()
{
    it('should output to console Results nums1: [1,2,3,2,5,6]', function ()
    {
        var results = merge([1,2,3,0,0,0], 3, [2,5,6], 3);
        console.log("Results: " + JSON.stringify(results));
        
        // Does not return a result, based on description of problem, view output
        assert.deepEqual(undefined, results);
    });
});
