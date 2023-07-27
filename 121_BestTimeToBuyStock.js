// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
const assert = require('assert');

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices)
{
    if (prices == undefined || prices.length <= 1)
    {
        return 0;
    }
    
    let max_profit = 0;
    let min_buy = prices[0];
    
    for (let i = 1; i < prices.length; i++)
    {
        min_buy = Math.min(min_buy, prices[i]);
        max_profit = Math.max(prices[i] - min_buy, max_profit);
    }
    
    return max_profit;
};




describe('121_BestTimeToBuyStock.js', function ()
{
    it('should return 5', function ()
    {
        let results = maxProfit([7,1,5,3,6,4]);
        assert.deepEqual(5, results);
    });
    
});


