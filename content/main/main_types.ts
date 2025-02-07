export type List_Knots_Type = {
	imageAnimated: number;
	id: string;
	group: string;
	name: string;
	imagePreview: number;
	imageFull: number;
	description: string;
};

export type List_Knots_Full_Type = {
	id: string;
	group: string;
	name: string;
	imagePreview: string;
	imageFull: number;
	imageAnimated: number;
	description: string;
};

export type ModalProps = {
	id: string;
	name: string;
	description: string;
	imageFull: number;
	imageAnimated: number;
};
