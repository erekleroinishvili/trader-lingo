# TraderLingo

## Purpose

This app helps master vocabulary used by traders.

## Demo

* [Demo @ GitHub](https://erekleroinishvili.github.io/trader-lingo/)

## Configuring Questions

### Question Types

There are five question types supported:

* `ask`, `bid`, `ask-bid`, `ask-bid-same`, and `prompt`

#### Question `ask`

#### Question `bid`

#### Question `ask-bid`

#### Question `ask-bid-same`

#### Question `prompt`

### Config File

Questions are configured in the file `src/app/questions.config.ts` ([view](src/app/questions.config.ts))

### Config File Format

```TypeScript
export const PROMPTS: WeightedPrompt[] = [
    {
        weight: 1, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'ask', // Offer to sell
            query: false, // Optional. Trader is querying market for existing offers to buy
            cancel: false, // Optional; Trader is canceling offer
            reply: [ // One or more intended phrasing for trader to articulate offer
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '{ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 1, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'bid', // Offer to buy
            query: false, // Optional. Trader is querying market for existing offers to sell
            cancel: false, // Optional; Trader is canceling offer
            reply: [ // One or more intended phrasing for trader to articulate offer
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}',
            ],
        },
    },
    {
        weight: 1, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'ask-bid', // Two offers: to buy & sell. Different volumes.
            query: false, // Optional. Trader is querying market for existing offers to buy & sell
            cancel: false, // Optional; Trader is canceling offer
            reply: [ // One or more intended phrasing for trader to articulate offer
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}, {ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 1, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'ask-bid-same', // Two offers: to buy & sell. Same volumes.
            query: false, // Optional. Trader is querying market for existing offers to buy & sell
            cancel: false, // Optional; Trader is canceling offer
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '⛔ Apples!',
            ],
        },
    },
    {
        weight: 1, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'prompt', // Any text as a question
            prompt: 'Can I use {any-var} for volumes and {$any-other-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}',
            reply: [
                // Use: {any-var} for volumes and {$any-other-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}
                'Yes, you can use {any-var} for volumes and {$any-other-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}',
            ],
        }
    },
]

```
