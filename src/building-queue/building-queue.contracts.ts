export const BUILDING_QUEUE_REPOSITORY = 'BUILDING_QUEUE_REPOSITORY'

export interface AddToBuildingQueueDto {
    server: string
    buildingName: string
    level: number
}