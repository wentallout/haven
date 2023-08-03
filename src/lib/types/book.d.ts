export type Book = {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
	body: Body[];
	bookCoverImage: BookCoverImage;
	downloadLink: string;
	slug: Slug;
	tags: string[];
	title: string;
};

export type Body = {
	_key: string;
	_type: string;
	children: Child[];
	markDefs: any[];
	style: string;
};

export type Child = {
	_key: string;
	_type: string;
	marks: any[];
	text: string;
};

export type BookCoverImage = {
	_type: string;
	asset: Asset;
};

export type Asset = {
	_ref: string;
	_type: string;
};

export type Slug = {
	_type: string;
	current: string;
};
