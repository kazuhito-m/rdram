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

export type UseCase = {
    name: string
    next_state: string
}

export type State = {
    name: string
    usecase: UseCase[]
}

export type StateGroup = {
    group: string
    value: State[]
}

export type Activity = {
    name: string
    used_by: string[]
    usecase: string[]
}

export type BUC = {
    name: string
    activity: Activity[]
}

export type Business = {
    name: string
    main_actor: string[]
    buc: BUC[]
}

export type TangoRdra = {
    overview: Overview
    actor: any[]
    external_actor: any[]
    information: ContextOfInfomation[]
    state: StateGroup[]
    // transition: StateTransition | null
    variation: VariationTango[]
    condition: ConditionTango[]
    business: Business[]
    // usecase: Usecase | null
}
