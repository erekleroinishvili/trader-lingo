import { WeightedPrompt } from "./models/weighted-prompt.model"

export const PROMPTS: WeightedPrompt[] = [
    {
        weight: 10,
        prompt: {
            type: 'ask',
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '{ask-volume} offered at ${ask-price}',
                '{ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 10,
        prompt: {
            type: 'bid',
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}',
                '${bid-price} for {bid-volume}',
            ],
        },
    },
    {
        weight: 5,
        prompt: {
            type: 'ask-bid',
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}, {ask-volume} offered at ${ask-price}',
                '${bid-price} bid for {bid-volume}, {ask-volume} at ${ask-price}',
                '${bid-price} for {bid-volume}, {ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 5,
        prompt: {
            type: 'ask-bid-same',
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} at ${ask-price}, {ask-volume} up',
            ],
        },
    },
    {
        weight: 1,
        prompt: {
            type: 'ask-bid',
            cancel: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                'I\'m out!',
                'I am out!',
            ],
        },
    },
    {
        weight: 1,
        prompt: {
            type: 'prompt',
            prompt: [
                'I am buying all the contracts on the offer',
            ],
            reply: [
                // Use: {any-var} for volumes and {$any-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}
                'Buy \'em!',
                'Take \'em',
            ],
        }
    },
    {
        weight: 1,
        prompt: {
            type: 'prompt',
            prompt: [
                'I am buying {bid-volume} contracts',
            ],
            reply: [
                // Use: {any-var} for volumes and {$any-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}
                'Buy {bid-volume}!',
            ],
        }
    },
    {
        weight: 1,
        prompt: {
            type: 'prompt',
            prompt: [
                'I will sell you all the contracts you want',
            ],
            reply: [
                // Use: {any-var} for volumes and {$any-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}
                'Sold!',
            ],
        }
    },
    {
        weight: 1,
        prompt: {
            type: 'prompt',
            prompt: [
                'I am selling {ask-volume} contracts',
            ],
            reply: [
                // Use: {any-var} for volumes and {$any-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}
                'Sell {ask-volume}!',
            ],
        }
    },
    {
        weight: 2,
        prompt: {
            type: 'ask',
            query: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                'Where is the bid in apples?',
                'What price can I sell apples for?',
            ],
        },
    },
    {
        weight: 2,
        prompt: {
            type: 'bid',
            query: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                'Where is the offer in apples?',
                'What price can I buy apples for?',
            ],
        },
    },
    {
        weight: 2,
        prompt: {
            type: 'ask-bid',
            query: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                'How are apples?',
                'What is the market in apples?',
                'Where is the bid/offer in apples?',
            ],
        },
    },
    {
        weight: 0,
        prompt: {
            type: 'ask',
            cancel: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                'No longer offering apples',
            ],
        },
    },
    {
        weight: 0,
        prompt: {
            type: 'bid',
            cancel: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}',
            ],
        },
    },
    {
        weight: 0,
        prompt: {
            type: 'prompt',
            prompt: 'Can I use {any-var} for volumes and {$any-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}',
            reply: [
                // Use: {any-var} for volumes and {$any-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}
                'Yes, you can use {any-var} for volumes and {$any-var} for prices. E.g.: {ask-volume} {$ask-price} {bid-volume} {$bid-price}',
            ],
        }
    },
]
