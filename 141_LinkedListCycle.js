const assert = require('assert');

/**
 * Definition for singly-linked list.
 *
 */
function ListNode(val)
{
    this.val = val;
    this.next = null;
}

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can be
 * reached again by continuously following the next pointer.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head)
{
    let current_node = head;
    
    // ------------------------------------------------------------------------
    // Check Inputs:
    // ------------------------------------------------------------------------
    if (head == undefined)
    {
        return false;
    }
    
    // ------------------------------------------------------------------------
    // Store references to the nodes we've seen.
    // ------------------------------------------------------------------------
    let seen_nodes = new Set();
    
    // ------------------------------------------------------------------------
    // Scan through the list and if we find a node we've seen
    // before, return false as we've got a cycle:
    // ------------------------------------------------------------------------
    while (current_node.next != undefined && current_node.next != null)
    {
        
        if (seen_nodes.has(current_node.next) == true)
        {
            return true;
        }
        
        seen_nodes.add(current_node.next);
        
        current_node = current_node.next;
    }
    
    // ------------------------------------------------------------------------
    // We never saw a node we've already visited again, so no
    // cycles exist:
    // ------------------------------------------------------------------------
    return false;
};



describe('141_LinkedListCycle.js', function ()
{
    it('should return true', function ()
    {
        var node1 = new ListNode(1);
        var node2 = new ListNode(9);
        node1.next = node2;
        node2.next = node1;
        
        let results = hasCycle(node1);
        assert.deepEqual(true, results);
    });
    
    it('should return false', function ()
    {
        var node1 = new ListNode(1);
        var node2 = new ListNode(9);
        node1.next = node2;
    
        let results = hasCycle(node1);
        assert.deepEqual(false, results);
    });
    
});
