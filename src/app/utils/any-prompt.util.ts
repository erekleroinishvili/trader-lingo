import { AnyPromptMold, PlaceholderType, AnyPrompt } from "../models/any-prompt.model"
import { genrateRandomUnit } from "./random-generators.util"
import { forceArray, selectRandomElement } from "./various.util"

export function makePhraseFromMold(questonMold: AnyPromptMold): AnyPrompt {
    const prompt = Array.isArray(questonMold.prompt)
        ? selectRandomElement(questonMold.prompt)
        : questonMold.prompt

    // Extract numbered placeholders like: `{$1}` and `{#2}`
    const placeholders = prompt.match(/\{[#$]\d+\}/g) ?? [] as string[]

    /**
     * Maps each placeholder to its value. E.g:
     * {`{$1}` -> 9.75, `{#2}` -> 30, `{$3} -> 3.25, ...}
     */
    const placeholderMap = placeholders
        .map(placeholder => ({
            placeholder,
            type: placeholder[1] as PlaceholderType,
            value: Number(placeholder.slice(2,-1)),
        }))
        .map(parsedPlaceholder => ({
            placeholder: parsedPlaceholder.placeholder,
            value: genrateRandomUnit(parsedPlaceholder),
        }))

        return {
            prompt: applyPlaceholderMapTo(prompt, placeholderMap),
            reply: forceArray(questonMold.reply).map(temlate => applyPlaceholderMapTo(temlate, placeholderMap))
        }
}

function applyPlaceholderMapTo(template: string, placeholderMap: { placeholder: string, value: number}[]) {
    return placeholderMap.reduce((processedTemplate, {placeholder, value}) => processedTemplate.replaceAll(placeholder, String(value)), template)
}
