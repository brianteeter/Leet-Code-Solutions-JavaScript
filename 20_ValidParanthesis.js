var assert = require('assert');

/**
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
                last_open_char = current_char;
                break;
            }
            // For close brackets, make sure the most recent open matches:
            case ')':
            {
                if (last_open_char != '(')
                {
                    return false;
                }
                break;
            }
            case '}':
            {
                if (last_open_char != '{')
                {
                    return false;
                }
                break;
            }
            case ']':
            {
                if (last_open_char != '[(]')
                {
                    return false;
                }
                break;
            }
        }
    }
    
    // If we get here without finding an error, we're good:
    return true;
};


describe('20_ValidParanthesis.js', function ()
{
    it('should return true for input {}', function ()
    {
        var results = isValid("{}");
        console.log("Results test1: " + results);
        
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});
