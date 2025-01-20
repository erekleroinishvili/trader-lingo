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
    type: 'bid'
    bid: TradeSpec
}

interface AskBidOnlyPromptMold extends AskBidPromptBase {
    type: 'ask-bid'
}
interface AskBidOnlyPrompt extends AskBidOnlyPromptMold {
    type: 'ask-bid'
    ask: TradeSpec
    bid: TradeSpec
}
