export interface CRUD {
    list: () => Promise<any>,
    create: (resource: any) => Promise<any>,
    updateById: (resourceID: any) => Promise<any>,
    readById: (resourceID: any) => Promise<any>,
    deleteById: (resourceID: any) => Promise<void>
}

