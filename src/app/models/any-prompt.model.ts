export type PlaceholderType =
    '$' | // Transaction Price
    '#' | // Transaction Volume
    never

export interface AnyPromptMold {
    type: 'prompt'
    prompt: string | string[]
    reply: string | string[]
}

export interface AnyPrompt {
    type: 'prompt'
    prompt: string
    reply: string[]
}
