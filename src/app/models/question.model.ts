export type PlaceholderType =
    '$' | // Transaction Price
    '#' | // Transaction Volume
    never

export interface QuestionMold {
    prompt: string | string[]
    reply: string | string[]
}

export interface Question {
    prompt: string
    reply: string[]
}
