declare interface Project {
	id: string;
	title: string;
	intro: string;
	challenge: string;
	whatWeGet: string;
	whatWeDid: string;
	thumbnail: string;
	images: {
		publicUrl?: string
	}[],
}
