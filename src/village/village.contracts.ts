export const VILLAGE_REPOSITORY = 'VILLAGE_REPOSITORY'

export interface IBuilding {
    id: string
    name: string
    level: string
    status: string
    href: string
    slot: string
}

export interface IVillage {
    villageId: number
    buildings: IBuilding[]
}