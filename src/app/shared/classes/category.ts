export interface Child {
	category_id: number;
	name: string;
	category_type: string;
	available_ticket: number;
}

export interface Category {
	category_id: number;
	name: string;
	category_type: string;
	available_ticket: number;
	childs: Child[];
}
