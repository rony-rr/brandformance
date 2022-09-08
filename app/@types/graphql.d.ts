declare interface BannerProps {
	image: ImageCSM;
	imageMobile: ImageCSM;
}

declare interface TarjetaInicioProps {
	id: string;
	title: string;
	content: string;
	bubble: string;
	extra: string;
	image: ImageCSM;
}

declare interface TabItemProps {
	image: ImageCSM;
	title?: string;
	content?: string;
	portadaImage?: ImageCSM;
	bubble?: string;
	extra?: string;
	bubblePosition?: BubbleType
}

declare interface ServiciosTabProps {
	id: string;
	tab: string;
	icon: IconType;
	items: TabItemProps[];
}

declare interface SettingProject {
	titleContact: string;
	contentContact: string;
	ctaContact: string;
	emailContact: string;
	titleCookie: string;
	contentCookie: string;
	ctaCookie: string;
	terms: ImageCSM
}
