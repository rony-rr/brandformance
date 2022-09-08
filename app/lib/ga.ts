export const GTM_ID = "GTM-KGXFXZB";

interface EventPushProps {
	category: 'engagement' | 'conversion';
	event: 'social' | 'click' | 'agenda';
	label:
		| 'emailSent'
		| 'Linkedin'
		| 'Youtube'
		| 'Instagram'
		| 'Facebook'
		| 'Twitter'
		| 'Pinterest'
		| 'agendaEvent';
}

export const push = ({
	category,
	event,
	label,
}: EventPushProps) => {
	// @ts-ignore
	window?.dataLayer?.push({
		category,
		event,
		label
	})
};
