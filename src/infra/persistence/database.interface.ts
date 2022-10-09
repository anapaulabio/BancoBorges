export interface IDatabase {
    list(type: string): any[],
    create(type: string, data: any): number,
    read(type: string, dataId: number): any,
    update(type: string, data: any): boolean,
    delete(type: string, dataId: number): boolean
}