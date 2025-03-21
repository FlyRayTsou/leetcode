/*
 Runtime 280 ms Beats 6.25%
 Memory 68.73 MB Beats 34.38%
 */
function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    const recipesHashMap: Map<string, number> = new Map<string, number>();
    const suppliesHashMap: Map<string, boolean> = new Map<string, boolean>();
    for (let i = 0; i < recipes.length; i++) {
        recipesHashMap.set(recipes[i], i)
    }
    for (let i = 0; i < supplies.length; i++) {
        suppliesHashMap.set(supplies[i], true)
    }
    const result: string[] = [];
    let beforeSize = recipesHashMap.size
    while(recipesHashMap.size > 0) {
        beforeSize = recipesHashMap.size
        for (let item of recipesHashMap) {
            const ingredientIndex = item[1]
            let ableToMake = true;
            for (let j = 0; j < ingredients[ingredientIndex].length; j++) {
                if (! suppliesHashMap.has(ingredients[ingredientIndex][j])) {
                    ableToMake = false;
                    break;
                }
            }
            if (ableToMake) {
                recipesHashMap.delete(item[0])
                suppliesHashMap.set(item[0], true)
                result.push(item[0]);
            }
        }
        let afterSize = recipesHashMap.size
        if (beforeSize === afterSize) {
            break;
        }
    }

    return result;
};