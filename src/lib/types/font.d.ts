export type Font = {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
	body: Body[];
	fontCategory: string;
	fontCoverImage: FontCoverImage;
	slug: Slug;
	tags: string[];
	title: string;
};

export type Body = {
	_key: string;
	_type: string;
	children: Child[];
	markDefs: MarkDef[];
	style: string;
};

export type Child = {
	_key: string;
	_type: string;
	marks: string[];
	text: string;
};

export type MarkDef = {
	_key: string;
	_type: string;
	href: string;
};

export type FontCoverImage = {
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
