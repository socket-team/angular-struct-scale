export interface Child {
	area_id: number;
	name: string;
	area_type: string;
	available_ticket: number;
}

export interface Area {
	area_id: number;
	name: string;
	area_type: string;
	available_ticket: number;
	childs: Child[];
}
