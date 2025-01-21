import { WeightedPrompt } from "./models/weighted-prompt.model"

export const PROMPTS: WeightedPrompt[] = [
    {
        weight: 1,
        prompt: {
            type: 'ask',
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '{ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 1,
        prompt: {
            type: 'ask',
            query: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                'Where is the offer in apples?',
            ],
        },
    },
    {
        weight: 1,
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
        weight: 1e7,
        prompt: {
            type: 'bid',
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}',
            ],
        },
    },
    {
        weight: 1,
        prompt: {
            type: 'bid',
            query: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                'Where is the bid in apples?',
                'What price can I buy apples for?',
            ],
        },
    },
    {
        weight: 1,
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
        weight: 1,
        prompt: {
            type: 'ask-bid',
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '${bid-price} bid for {bid-volume}, {ask-volume} at ${ask-price}',
            ],
        },
    },
    {
        weight: 1,
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
        weight: 1,
        prompt: {
            type: 'ask-bid',
            cancel: true,
            reply: [
                // Use: {ask-volume} {ask-price} {bid-volume} {bid-price}
                '⛔ Apples!',
            ],
        },
    },
    {
        weight: 1,
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
