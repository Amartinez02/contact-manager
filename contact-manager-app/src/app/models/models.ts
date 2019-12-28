export interface Contact {
    id: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    dealer: string;
    locality: number;
    locality_name?: string;

}

export interface Dealer {
    id: number;
    name: string;
    locality_id: number
}

export interface Locality {
    id: number;
    name: string;
}

