const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val)
{
    let k = 0;
    
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] !== val)
        {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};


describe('27_RemoveElement.js', function ()
{
    it('should remove 3s from [3,2,2,3]]', function ()
    {
        let result = removeElement([3,2,2,3], 3);
        assert.deepEqual(2, result);
    });
});



