const assert = require('assert');

var RandomizedSet = function() {
    
    this.the_set = new Set();
    
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val)
{
    if (this.the_set.has(val))
    {
        return false;
    }
    else
    {
        this.the_set.add(val);
        return true;
    }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val)
{
    let result = this.the_set.has(val);
    this.the_set.delete(val);
    return result;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function()
{
    return Array.from(this.the_set)[Math.floor(Math.random() * this.the_set.size)];
};

/**
 * From LeetCode:
 *
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
describe('380_InsertDeleteGetRandom1.js', function ()
{
    it('should produce good results', function ()
    {
        var obj = new RandomizedSet()
        var param_1 = obj.insert(1);
        var param_2 = obj.insert(2);
        var param_3 = obj.remove(2);
        var param_4 = obj.getRandom();
        
        assert.deepEqual(true, param_1);
        assert.deepEqual(true, param_2);
        assert.deepEqual(true, param_3);
        assert.deepEqual(true, param_4 != undefined);
    });
});



