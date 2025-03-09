/*
 * Runtime 44 ms Beats 90.38%
 * Memory 55.65 MB Beats 15.53%
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */