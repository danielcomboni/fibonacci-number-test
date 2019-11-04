
/**
 * @author Samson Kibrom,
 * @author Daniel Comboni
 */


const chai = require('chai');
const Fibonacci = require('./Fibonacci');

/**
 * 
 * @param {Number} pos 
 */
const fibTest = pos => {
    it('test fibonacci number at position ' + pos, () => {
        chai.assert(Fibonacci.Fibonacci.getFibonacciNumberAtPos(pos), 8);
    });
}

fibTest(6);