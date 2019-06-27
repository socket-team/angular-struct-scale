export interface Ticket {
    id: string;
    title: string;
    clinic_name: string;
    station_detail: string;
    sale_achievements: string;
    price?: any;
    sale_price?: string;
    sale_off: string;
    point: string;
    expired: boolean;
    avatar: string;
    version_sale?: any;
    parent_id_sale: string;
    title_tag: string;
    display_view: number;
    on_sale: boolean;
    stations: Station[];
}

export interface Station {
    station_id?: number;
    name?: string;
    furigana_name?: string;
}