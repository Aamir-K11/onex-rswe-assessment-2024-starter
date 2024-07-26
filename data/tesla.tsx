import { ITesla } from "./common";

const Tesla: ITesla = {
    state: "new",
    title: "2021 Tesla Model 3",
    vin:"JN1AZOCPOBTOO9448",
    rating: 5,
    price: "$41,103",
    estimatedDelivery: {
        to: "16 Aug",
        from:"23 Aug"
    },
    colours: [
        {
            name: "Black",
            hex:  "#030303"
        },
        {
            name: "Red",
            hex: "#D43A55"
        },
        {
            name: "Blue",
            hex: "#0036C3"
        },
        {
            name: "Silver",
            hex: "#ffffff",
            default: true
        }
    ],
    companyDescription: "Tesla believes in accelerating the world transition to sustainable energy with electric cars.",
    companyLink: {
        text: "View the Tesla Collection",
        link: "tesla/collection"
    },
    features: [
        {
            feature: "Diesel Fuel",
            asset: "/assets/evfy/diesel.svg"
        },
        {
            feature: "Automatic Transmission",
            asset: "/assets/evfy/auto-transmission.svg"
        },
        {
            feature: "11,549 Miles",
            asset: "/assets/evfy/speed.svg"
        },
        {
            feature: "3.5L Displacement",
            asset: "/assets/evfy/displacement.svg"
        },
    ],
    images: [
        {
            id: 1,
            path: "/assets/evfy/red-tesla.png"
        },
        {
            id: 2,
            path: "/assets/evfy/red-tesla.png"
        },
        {
            id: 3,
            path: "/assets/evfy/tesla.png"
        },
        {
            id: 4,
            path: "/assets/evfy/red-tesla.png"
        },
        {
            id: 5,
            path: "/assets/evfy/red-tesla.png"
        },
    ]

}

export default Tesla;
