export type List_Knots_Type = {
	id: string;
	group: string;
	name: string;
	imagePreview: string;
	imageFull: string;
	description: string;
};

export type List_Knots_Full_Type = {
	id: string;
	group: string;
	name: string;
	imagePreview: string;
	imageFull: string;
	imageAnimated: string;
	description: string;
};

export type ModalProps = {
	title: string;
	message: string;
	image: string;
};
