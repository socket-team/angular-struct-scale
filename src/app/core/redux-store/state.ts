import { Ticket } from "../../shared/classes";
export interface AppState {
    app_name?: string;
    tickets?: Ticket[];
    device?: "SP" | "PC" | "OTHER" | 'NONE';
    area?: string;
    category?: string;
    area_id?: any;
    category_id?: any;
}


export const INIT_STATE_VALUE = <AppState>{
    app_name: "Redux + StoryBook",
    tickets: [],
    device: 'NONE',
    area: "",
    category: "",
    area_id: "",
    category_id: ""
}