'use strict';

var assert = require('assert');
var flip = require('./object-swap');

describe('object flip', function() {
    it('it should flip the keys and values', function() {
        assert.deepEqual(flip({
            a: 1,
            b: 2,
            c: 3
        }), {
            '1': 'a',
            '2': 'b',
            '3': 'c'
        });
    });

    it('it should throw an exception if not an object is passed', function() {
        assert.throws(function() {
            flip('string')
        }, /This is not an object/);
    });
});

