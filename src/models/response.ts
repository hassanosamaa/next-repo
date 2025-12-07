export interface IResponse<T> {
    data: T
    isSuccess: boolean
    message: string
    status_code: number
}

export interface IPaginatorModel<T> extends IPaginationParamsModel {
    items: T[]
}

export interface IPaginatorMetadataModel {
    pageNumber: number
    pageSize: number
    totalCount: number
    totalPages: number
}

export interface IPaginationParamsModel {
    pageSize?: number
    pageNumber?: number
    totalCount?: number
    totalPages?: number
}

export interface IResourceModel {
    url: string
    size: number
    id: string
    name: string
    contentType: string
}

export interface IResponsiveImagesGroupModel {
    desktop: IResourceModel[]
    tablet: IResourceModel[]
    mobile: IResourceModel[]
}

export interface IResponsiveImagesModel {
    desktop: IResourceModel
    tablet: IResourceModel
    mobile: IResourceModel
}
