import { AskBidPrompt, askBidPromptMold } from "../models/ask-bid-prompt.model";
import { generateTradeSpec } from "./random-generators.util";

export function makeAnyPromptFromMold(askBidPromptMold: askBidPromptMold): AskBidPrompt {

    const mold: askBidPromptMold = {...askBidPromptMold}

    if ( ! mold.cancel && ! ('query' satisfies keyof typeof mold in mold) ) {
        mold.query = Math.random() < 0.2
    }

    if ( ! mold.query && ! ('cancel' satisfies keyof typeof mold in mold) ) {
        mold.cancel = Math.random() < 0.2
    }

    switch ( mold.type ) {
        case 'ask': return { ...mold, ask: generateTradeSpec() }
        case 'bid': return { ...mold, bid: generateTradeSpec() }
        case 'ask-bid': return { ...mold, ask: generateTradeSpec(), bid: generateTradeSpec() }
    }

}
