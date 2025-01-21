import { AnyPromptMold } from "./any-prompt.model"
import { askBidPromptMold } from "./ask-bid-prompt.model"

export interface WeightedPrompt {
    weight: number
    prompt: askBidPromptMold | AnyPromptMold
}
