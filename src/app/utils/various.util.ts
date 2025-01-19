/** Selects random element from an array */
export function selectRandomElement<T>(list: T[]) {
    return list[Math.random() * list.length]
}

export function forceArray<T>(itemOrList: T | T[]) {
    return Array.isArray(itemOrList)
        ? itemOrList
        : [itemOrList]
}
