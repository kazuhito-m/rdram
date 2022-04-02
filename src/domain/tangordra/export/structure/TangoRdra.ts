export type Overview = {
    bussiness: string
    system: string
}

export type Actor = {
    name: string
    description: string
}

export type Infomation = {
    name: string
    related: string[]
    variation: string
}

export type ContextOfInfomation = {
    context: string
    value: Infomation[]
}

export type VariationTango = {
    name: string
    value: string[]
}

export type ConditionTango = {
    name: string
    descripion: string
    variation: string[]
}


export type TangoRdra = {
    overview: Overview
    actor: any[]
    external_actor: any[]
    information: ContextOfInfomation[]
    // state: State | null
    // transition: StateTransition | null
    variation: VariationTango[]
    condition: ConditionTango[]
    // business: Business | null
    // usecase: Usecase | null
}
