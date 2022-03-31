export type TangoRdra = {
    overview: Overview
    actor: any[]
    externalActor: any[]
    // information: Information | null
    // state: State | null
    // transition: StateTransition | null
    // variation: Variation | null
    // condition: Condition | null
    // business: Business | null
    // usecase: Usecase | null
}

export type Overview = {
    bussiness: string
    system: string
}

export type Actor = {
    name: string
    description: string
}
