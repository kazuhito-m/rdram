export type TangoRdra = {
    overview: Overview
    actor: any[]
    external_actor: any[]
    information: ContextOfInfomation[]
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

export type ContextOfInfomation = {
    context: string
    value: Infomation[]
}

export type Infomation = {
    name: string
    related: string[]
    variation: string
}