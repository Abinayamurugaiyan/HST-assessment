export interface crossSells {
    ProductId: number
}
export interface productsList {
    Id: number,
    Title: string,
    Description: string,
    ThumbnailUrl: string,
    InfoUrl: string,
    CrossSells : [{
        ProductId: number
    }]
}