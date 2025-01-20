export type PlaceholderType =
    '$' | // Transaction Price
    '#' | // Transaction Volume
    never

export interface AnyPromptMold {
    prompt: string | string[]
    reply: string | string[]
}

export interface AnyPrompt {
    prompt: string
    reply: string[]
}
