import { WeightedPrompt } from "../models/weighted-prompt.model";
import { randomInRange } from "./random-generators.util";

export function forceArray<T>(itemOrList: T | T[]) {
    return Array.isArray(itemOrList)
        ? itemOrList
        : [itemOrList]
}

/** Selects random element from an array */
export function selectRandomElement<T>(list: T[]) {
    return list[Math.floor(Math.random() * list.length)]
}

export function selectRandomElementByWeightKey(list: WeightedPrompt[]): WeightedPrompt['prompt'] {
    const totalWeight = list.reduce((weight, item) => weight + item.weight, 0)
    const randomPoint = randomInRange(1, totalWeight)

    for (let w = 0, i = 0; i < list.length; i++) {
        w += list[i].weight
        if (w >= randomPoint) {
            return list[i].prompt
        }
    }

    throw new Error('Failed to select random element by weight')
}

