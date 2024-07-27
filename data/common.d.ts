export interface ITesla {
    state: 'new' | 'pre-loved';
    title: string;
    vin: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    price: string;
    estimatedDelivery: { to: string; from: string };
    colours: { name: string; hex: string; default?: boolean }[];
    companyDescription: string;
    companyLink: {
        text: string;
        link: string;
    };
    features: { feature: string; asset: string }[];
    images: { id: number; path: string }[];
    specifications: Specification[];
}

interface Specification {
    exterior: {
        bodyStyle: string;
        exteriorColour: string;
        length: string;
        wheelBase: string;
        width: string;
        fullWidth: string;
        clearance: string;
    };
    interior: {
        seating: string;
        interiorColour: string;
        headRoomFront: string;
        headRoomBack: string;
        legRoomFront: string;
        legRoomBack: string;
        shoulderRoomFront: string;
    };
    bevPerfomance: {
        horsePower: string;
        mpge: string;
        topSpeed: string;
    };
    charging: {
        electricRange: string;
        batterySize: string;
        costOfCharge: string;
    };
}
