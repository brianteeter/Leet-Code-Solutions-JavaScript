const assert = require('assert');

/**
 * Convert the number to a roman number, assuming num < 4000 as was described in LeetCode.
 *
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num)
{
    // Check Inputs:
    if (num == undefined || num < 0)
    {
        return undefined;
    }
    
    // Since we know num < 3999, start with thousands:
    let remaining = num;
    let thousands = Math.floor(num / 1000);
    remaining = remaining - (thousands * 1000);
    
    // Compute the 500s:
    let five_hundreds = Math.floor(remaining / 500);
    remaining = remaining - (five_hundreds * 500);
    
    // Compute the hundreds:
    let hundreds = Math.floor(remaining / 100);
    remaining = remaining - (hundreds * 100);
    
    // Compute the fifts:
    let fiftys = Math.floor(remaining / 50);
    remaining = remaining - (fiftys * 50);
    
    // Compute the tens:
    let tens = Math.floor(remaining / 10);
    remaining = remaining - (tens * 10);
    
    // Compute the fives:
    let fives = Math.floor(remaining / 5);
    remaining = remaining - (fives * 5);
    
    // The remaining should be the ones:
    let ones = remaining;
    
    let result = "";

    // We never have more than 3999, so no need to address the 4 or above cases:
    for (let i = 0; i < thousands; i++)
    {
        result += "M";
    }
    
    // There can never be more than 1 - 500 value because thousands:
    if (five_hundreds >= 1)
    {
        result += "D";
    }
    
    // Since we have five hundreds, never should see more than 4 hundreds
    switch (hundreds)
    {
        case 4:
        {
            result += "CD";
            break;
        }
        default:
        {
            for (var h = 0; h < hundreds; h++)
            {
                result += "C";
            }
            break;
        }
    }
    
    // There can never be more than 1 - 50 value because hundreds:
    if (fiftys == 1)
    {
        result += "L";
    }
    
    // Since we have fiftys, never should see more than 4 tens
    switch (tens)
    {
        case 4:
        {
            result += "XL";
            break;
        }
        default:
        {
            for (var t = 0; t < tens; t++)
            {
                result += "X";
            }
            break;
        }
    }
    
    // There can never be more than 1 - 50 value because hundreds:
    if (fives == 1)
    {
        result += "V";
    }
    
    // Since we have fiftys, never should see more than 4 tens
    switch (ones)
    {
        case 4:
        {
            result += "IV";
            break;
        }
        default:
        {
            for (var o = 0; o < ones; o++)
            {
                result += "I";
            }
            break;
        }
    }
    
    return result;
};


describe('12_IntegerToRoman.js', function ()
{
    it('should return MMMCVII', function ()
    {
        let results = intToRoman( 3107);
        assert.deepEqual("MMMCVII", results);
    });
    
});
