export interface ITesla {
    state: 'new' | 'pre-loved';
    title: string;
    vin: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    price:string;
    estimatedDelivery: {to:string, from:string};
    colours: {name: string, hex:string, default?:boolean}[];
    companyDescription: string;
    companyLink: {
        text:string;
        link: string
    }
    features: {feature: string, asset:string}[];
    images: {id: number, path: string}[];
}