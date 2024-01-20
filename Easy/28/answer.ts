/*
 * Runtime : 57ms Beats 52.32% of users with TypeScript
 * Memory : 51.85MB Beats 5.05% of users with TypeScript
 * haystack.length = M
 * needle.length = N
 * Time Complexity: O(M)
 * Memory Complexity: O(1)
 */
function strStr(haystack: string, needle: string): number {
    let firstIndex = -1;
    if (needle.length > haystack.length) return firstIndex;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i+needle.length) == needle) {
            firstIndex = i;
            break;
        }
    }
    return firstIndex;
};