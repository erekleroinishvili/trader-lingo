import { AskBidPrompt, askBidPromptMold } from "../models/ask-bid-prompt.model";
import { generateTradeSpec } from "./random-generators.util";
import { forceArray } from "./various.util";

export function makeAskBidPromptFromMold(askBidPromptMold: askBidPromptMold): AskBidPrompt {

    const mold: askBidPromptMold = {
        ...askBidPromptMold,
    }

    const reply = forceArray(mold.reply).slice()

    const ask = generateTradeSpec()
    const bid = generateTradeSpec()

    const replacements: {pattern: RegExp, value: number | string}[] = [
        { pattern: /\{\W?ask-price\}/gi, value: ask.price },
        { pattern: /\{\W?bid-price\}/gi, value: bid.price },
        { pattern: /\{\W?ask-volume\}/gi, value: ask.volume },
        { pattern: /\{\W?bid-volume\}/gi, value: bid.volume },
    ]

    for (const i in reply) {
        reply[i] = replacements.reduce((r, {pattern, value}) => r.replace(pattern, String(value)), reply[i])
    }

    switch ( mold.type ) {
        case 'ask': return { ...mold, reply, ask }
        case 'bid': return { ...mold, reply, bid }
        case 'ask-bid': return { ...mold, reply, ask, bid }
    }

}
