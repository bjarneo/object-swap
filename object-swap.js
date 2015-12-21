'use strict';

module.exports = function swap(obj) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        throw new TypeError('This is not an object');
    }

    var swapped = {};

    for (var p in obj) {
        if (!obj.hasOwnProperty(p)) {
            continue;
        }

        swapped[obj[p]] = p;
    }

    return swapped;
};
