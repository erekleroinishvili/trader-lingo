import { PlaceholderType } from "../models/any-prompt.model"
import { TradeSpec } from "../models/ask-bid-prompt.model"

/** Generate random value for a placeholder, such as a placeholder for price or volume */
export function genrateRandomValueForPlaceholder(parsedPlaceholder: {placeholder: string, type: PlaceholderType, value: number}) {
    switch (parsedPlaceholder.type) {
        case '$': return generatePrice()
        case '#': return generateVolume()
        default: throw new Error(`Invalid placeholder "${parsedPlaceholder.placeholder}"`)
    }
}

export function generateTradeSpec(): TradeSpec {
    return {
        price: generatePrice(),
        volume: generateVolume()
    }
}

/** Genrate random volume of a transaction */
function generateVolume() {
    return Math.random() < .1
        ? Math.floor(1 + Math.random() * (40-1)) * 25  // 25, 50, 75, ..., 975
        : Math.floor(1 + Math.random() * (10-1)) * 100 // 100, 200, 300, ..., 900
}

/** Generate random price for a transaction */
function generatePrice() {
    return Math.random() < .6
        ? Math.floor(1 + Math.random() * 60) * 0.25 // 25, 50, 75, ..., 975
        : Math.floor(1 + Math.random() * 20) * 1.00 // 100, 200, 300, ..., 900
}
