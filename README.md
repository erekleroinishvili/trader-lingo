# TraderLingo

## Purpose

This app helps master vocabulary used by traders.

## Demo

* [Demo @ GitHub](https://erekleroinishvili.github.io/trader-lingo/)

## Configuring Questions

### Question Types

There are five question types supported:

* `ask`, `bid`, `ask-bid`, `ask-bid-same`, and `prompt`

The first four question types (`ask`, `bid`, `ask-bid`, and `ask-bid-same`)
match specific trading situations and have graphical representation acompanying them.

The last question type (`prompt`) is a free textual question without graphical representation.

### Question Generation

Questions are generated from templates by filling in placeholder variables with randomly
generated values. In graphical questions, only predifined variables can be used:

`{ask-volume}`, `{ask-price}`, `{bid-volume}`, and `{bid-price}`

They will be filled with randomly generated values matching the graphical presentation of
the question.

`{ask-volume}` and `{bid-volume}` will always be set to a whole number.
`{ask-price}` and `{bid-price}` may be set to a fraction, such as `10.75`

In `prompt` or free text questions, any variable name can be used. If a variable name
starts with `$`, such as `{$ask-price}`, it may be set to a fraction. Otherwise
it will be set to a whole number. [See Question `prompt`](#question-prompt)

#### Question `ask`

Offer to sell.

#### Question `bid`

Offer to buy.

#### Question `ask-bid`

Offer to buy and sell.

#### Question `ask-bid-same`

Offer to buy and sell, both offered at the same volume.

#### Question `prompt`

This type of question does not have graphics and allows generating text questions.
The `prompt` key can be a string or an array of strings. It can use any variable names,
consisting of a variable name in a curly brackets.

E.g.: `{n}`, `{volume}`, `{bid-volume}`, `{ask-price}`, `{$bid-price}`

If a variable name starts with a `$` (as in `${bid-price}`), it will be treated as a currency
and may be set to a fractional value, such as `12.75`

The same variables should be used in the `reply`, where they will be set to the same
values as they were set in the `prompt`

### Config File

Questions are configured in the file `src/app/questions.config.ts` ([view](src/app/questions.config.ts))

### Config File Format

```TypeScript
export const PROMPTS: WeightedPrompt[] = [
    {
        weight: 10, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'ask', // Offer to sell
            query: false, // Optional. Trader is querying market for existing offers to buy
            cancel: false, // Optional; Trader is canceling offer
            reply: [ // One or more intended phrasing for trader to articulate offer
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '{ask-volume} offered at ${ask-price}',
                '{ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 10, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'bid', // Offer to buy
            query: false, // Optional. Trader is querying market for existing offers to sell
            cancel: false, // Optional; Trader is canceling offer
            reply: [ // One or more intended phrasing for trader to articulate offer
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}',
                '${bid-price} for {bid-volume}',
            ],
        },
    },
    {
        weight: 5, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'ask-bid', // Two offers: to buy & sell. Different volumes.
            query: false, // Optional. Trader is querying market for existing offers to buy & sell
            cancel: false, // Optional; Trader is canceling offer
            reply: [ // One or more intended phrasing for trader to articulate offer
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}, {ask-volume} offered at ${ask-price}',
                '${bid-price} bid for {bid-volume}, {ask-volume} at ${ask-price}',
                '${bid-price} for {bid-volume}, {ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 5, // Questions with higher weight appear more often
        prompt: { // Question specification
            // Question type. 'ask', 'bid', 'ask-bid, 'ask-bid-same', 'prompt'
            type: 'ask-bid-same', // Two offers: to buy & sell. Same volumes.
            query: false, // Optional. Trader is querying market for existing offers to buy & sell
            cancel: false, // Optional; Trader is canceling offer
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} at ${ask-price}, {ask-volume} up',
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
