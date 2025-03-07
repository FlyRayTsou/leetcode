/*
 * Runtime 40 ms Beats 96.98% 
 * Memory 55.82 MB Beats 7.79%
 */
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    function toBe (param: any): boolean {
        if (val === param) {
            return true
        }
        throw new Error("Not Equal")
    }
    function notToBe(param: any): boolean {
        if (val !== param) {
            return true
        }
        throw new Error("Equal")
    }

    return { toBe, notToBe }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */