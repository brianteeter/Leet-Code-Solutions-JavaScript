var assert = require('assert');

/**
 * Check if parenthesis are balanced:
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s)
{
    if (s == undefined || s.length == 0)
    {
        return true;
    }

    let current_char = '';
    let last_open_char = '';
    let last_open_char_array = [];
    
    for (let i = 0; i < s.length; i ++)
    {
        current_char = s[i];
        
        switch (current_char)
        {
            // For open brackets just track the latest open:
            case '(':
            case '{':
            case '[':
            {
                last_open_char_array.push(current_char);
                break;
            }
            // For close brackets, make sure the most recent open matches:
            case ')':
            {
                // No opening chars in the array so error out:
                if (last_open_char_array.length <= 0)
                {
                    return false;
                }
                
                last_open_char = last_open_char_array.slice(-1);
                
                if (last_open_char != '(')
                {
                    return false;
                }
                else
                {
                    // Since we found the matching bracket, pop off the array the opening bracket:
                    last_open_char_array.pop();
                }
                break;
            }
            case '}':
            {
                // No opening chars in the array so error out:
                if (last_open_char_array.length <= 0)
                {
                    return false;
                }
    
                last_open_char = last_open_char_array.slice(-1);
    
                if (last_open_char != '{')
                {
                    return false;
                }
                else
                {
                    // Since we found the matching bracket, pop off the array the opening bracket:
                    last_open_char_array.pop();
                }
                break;
            }
            case ']':
            {
                // No opening chars in the array so error out:
                if (last_open_char_array.length <= 0)
                {
                    return false;
                }
    
                last_open_char = last_open_char_array.slice(-1);
    
                if (last_open_char != '[')
                {
                    return false;
                }
                else
                {
                    // Since we found the matching bracket, pop off the array the opening bracket:
                    last_open_char_array.pop();
                }
                break;
            }
        }
    }
    
    // If we get here without finding an error, we're good:
    if (last_open_char_array.length == 0)
    {
        return true;
    }
    else
    {
        return false;
    }};


describe('20_ValidParanthesis.js', function ()
{
    it('should return true for input {}', function ()
    {
        var results = isValid("{}");
        console.log("Results: " + results);
        
        assert.equal(results, true);
    });
    
    it('should return false for input ][', function ()
    {
        var results = isValid("][");
        console.log("Results: " + results);
        
        assert.equal(results, false);
    });
    
    it('should return true for input {[]}', function ()
    {
        var results = isValid("{[]}");
        console.log("Results: " + results);
        
        assert.equal(results, true);
    });
});
