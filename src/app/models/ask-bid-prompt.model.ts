export type askBidPromptMold = AskOnlyPromptMold | BidOnlyPromptMold | AskBidOnlyPromptMold
export type AskBidPrompt = AskOnlyPrompt | BidOnlyPrompt | AskBidOnlyPrompt

export interface TradeSpec {
    price: number
    volume: number
}

interface AskBidPromptBase {
    query?: boolean
    cancel?: boolean
    reply: string | string[]
}

interface AskOnlyPromptMold extends AskBidPromptBase {
    type: 'ask'
}
interface AskOnlyPrompt extends AskOnlyPromptMold {
    ask: TradeSpec
}

interface BidOnlyPromptMold extends AskBidPromptBase {
    type: 'bid'
}
interface BidOnlyPrompt extends BidOnlyPromptMold {
    bid: TradeSpec
}

interface AskBidOnlyPromptMold extends AskBidPromptBase {
    type:
        'ask-bid' | // Different volumes for ask and bid
        'ask-bid-same' // Same volumes for ask and bid
}
interface AskBidOnlyPrompt extends AskBidOnlyPromptMold {
    ask: TradeSpec
    bid: TradeSpec
}
