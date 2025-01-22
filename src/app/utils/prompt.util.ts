import { AnyPrompt } from "../models/any-prompt.model"
import { AskBidPrompt } from "../models/ask-bid-prompt.model"
import { WeightedPrompt } from "../models/weighted-prompt.model"
import { makeAnyPromptFromMold } from "./any-prompt.util"
import { makeAskBidPromptFromMold } from "./ask-bid.util"
import { selectRandomElementByWeightKey } from "./various.util"

export function getRandomPrompt(list: WeightedPrompt[]): AnyPrompt | AskBidPrompt {
    const promptMold = selectRandomElementByWeightKey(list)
    switch (promptMold.type) {
        case 'prompt': return makeAnyPromptFromMold(promptMold)
        case 'ask':
        case 'bid':
        case 'ask-bid':
        case 'ask-bid-same': return makeAskBidPromptFromMold(promptMold)
    }
}

export function matchAnswers(candidateAnswer: string, correctAnswers: string[]) {
    return correctAnswers.some(correctAnswer => matchAnswer(candidateAnswer, correctAnswer))
}

function matchAnswer(candidateAnswer: string, correctAnswer: string) {
    return processAnswer(candidateAnswer) === processAnswer(correctAnswer)
}

function processAnswer(answer: string) {
    return answer
        .toLowerCase() // Convert to lowercase
        .replace(/[$€£]/g, '') // Remove currency symbols
        .replace(/['",!?/]/g, '') // Remove some punctuation
        .replace(/\s+/g, ' ') // Remove multiple spaces
        .replace(/^\s+/, '') // Remove leading spaces
        .replace(/\s+$/, '') // Remove trailing spaces
        .replace(/(?<=\D)\s+/g, '') // Remove spaces after non-digit
        .replace(/\s+(?=\D)/g, '') // Remove spaces before non-digit
        .replace(/\W$/, '') // Remove trailing punctuation
}
