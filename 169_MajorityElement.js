const assert = require('assert');


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums)
{
    // Check inputs:
    if (nums == undefined || nums.length <= 0)
    {
        return undefined;
    }
    
    let hash = {};
    let next_value = undefined;
    
    // Count occurances of a number in the list of numbers:
    for (let i = 0; i < nums.length; i++)
    {
        next_value = nums[i];
        if (hash[next_value] == undefined)
        {
            hash[next_value] = 1;
        }
        else
        {
            hash[next_value]++;
        }
    }
    
    let keys = Object.keys(hash);
    
    let current_times_found = -Infinity;
    let most_times_found = -Infinity;
    let most_found_value = undefined;
    
    keys.forEach(k => {
    
        current_times_found = hash[k];
        if (current_times_found > most_times_found)
        {
            most_times_found = current_times_found;
            most_found_value = k;
        }
    });
    
    return most_found_value;
};


describe('169_MajorityElement.js', function ()
{
    it('should return 1', function ()
    {
        let results = majorityElement([1,1,1,2,2,3]);
        assert.deepEqual(1, results);
    });
    
    it('should return 3', function ()
    {
        let results = majorityElement([0,0,1,1,1,1,2,3,3,3,3,3,3,3]);
        assert.deepEqual(3, results);
    });
});
