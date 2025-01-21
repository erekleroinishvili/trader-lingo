import { AnyPrompt } from "../models/any-prompt.model"
import { AskBidPrompt } from "../models/ask-bid-prompt.model"
import { WeightedPrompt } from "../models/weighted-prompt.model"
import { makeAnyPromptFromMold } from "./any-prompt.util"
import { makeAskBidPromptFromMold } from "./ask-bid.util"
import { selectRandomElementByWeightKey } from "./various.util"

export function getRandomPrompt(list: WeightedPrompt[]): AnyPrompt | AskBidPrompt {
    const promptMold = selectRandomElementByWeightKey(list)
    switch (promptMold.type) {
        case 'prompt':
            return makeAnyPromptFromMold(promptMold)
        case 'ask':
        case 'bid':
        case 'ask-bid':
            return makeAskBidPromptFromMold(promptMold)
    }
}

function matchAnswer(candidateAnswer: string, correctAnswer: string) {
    return candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()
}

export function matchAnswers(candidateAnswer: string, correctAnswers: string[]) {
    return correctAnswers.some(correctAnswer => matchAnswer(candidateAnswer, correctAnswer))
}
