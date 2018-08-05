import { Price } from "./price";

export interface EventItem {
    id: number;
    imageUrl: string,
    title: string;
    price: Price,
    time: string;
    date: string;
    location: string;
}
