
export type Text = {
    content: string,
    party: Party,
    analysis: {
        sentiment: Sentiment,
        rizzscore: number,
        status: Status,
        commentary: string
    }
}

export enum Party {
    USER,
    OTHER
}

export enum Sentiment {
    POSITIVE = "positive",
    NEGATIVE = "negative",
    NEUTRAL = "neutral"
}

export enum Status {
    BLUNDER = "blunder",
    BAD = "bad",
    NEUTRAL = "neutral",
    GOOD = "good",
    EXCELLENT = "excellent",
}