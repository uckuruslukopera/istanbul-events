import { ISession } from "./session.model";
import { IPrice } from "./price.model";

export interface IEvent {
    id: number,
    name: string,
    date: Date,
    time: string,
    price: IPrice,
    imageUrl: string,
    location?: {
        address: string,
        city: string,
        country: string,
    },
    onlineUrl?: string,
    sessions: ISession[],
}


