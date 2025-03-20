/*
 * Runtime 52 ms Beats 51.24% 
 * Memory 54.09 MB Beats 42.00%
 */
interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length-1] : -1
};
