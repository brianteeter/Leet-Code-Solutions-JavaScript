const assert = require('assert');

/**
 * Given a roman numeral, convert it to an integer.
 *
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    if (s == undefined || s.length == 0)
    {
        return 0;
    }
    
    let results = 0;
    let next_char = undefined;
    let next_two_chars = undefined;
    
    // For each letter translate to numbers, and add to the
    // overall sum:
    for (let i = 0; i < s.length; i++)
    {
        next_char = s[i];
        
        switch (next_char)
        {
            case 'I':
            {
                if ((s[i+1] == 'V') || (s[i+1] == 'X'))
                {
                    results -= 1;
                }
                else
                {
                    results += 1;
                }
                break;
            }
            case 'V':
            {
                results = results + 5;
                break;
            }
            case 'X':
            {
                if ((s[i+1] == 'L') || (s[i+1] == 'C'))
                {
                    results -= 10;
                }
                else
                {
                    results += 10;
                }
                break;
            }
            case 'L':
            {
                results = results + 50;
                break;
            }
            case 'C':
            {
                if ((s[i+1] == 'D') || (s[i+1] == 'M'))
                {
                    results -= 100;
                }
                else
                {
                    results += 100;
                }
                break;
            }
            case 'D':
            {
                results = results + 500;
                break;
            }
            case 'M':
            {
                results = results + 1000;
                break;
            }
        }
    }
    
    return results;
    
};

describe('13_RomanToInteger.js', function ()
{
    it('should return 1989', function ()
    {
        let results = romanToInt(("MCMLXXXIX"));
        assert.deepEqual(1989, results);
    });
    
});
