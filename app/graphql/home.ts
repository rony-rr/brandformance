import { gql } from '@apollo/client';

export const GET_SETTINGS = gql`
	query getSettings {
		settings: allSettings {
			titleContact
			contentContact
			ctaContact
			emailContact
			titleCookie
			contentCookie
			ctaCookie
			terms {
				publicUrl
			}
		}
	}
`;

export const HOME_QUERY = gql`
	query getBanner {
		allBanners: allBanners(where: { name: "Home", state: "active" }) {
			id
			image {
				publicUrl
			}
			imageMobile {
				publicUrl
			}
		}
		allTarjetasInicios: allTarjetasInicios(where: { state: "active" }) {
			id
			title,
			content
			bubble
			extra
			image {
				publicUrl
			}
		}
		allTabs: allServiciosEspecializados(where: {state: "active"}) {
			id
			tab
			icon
			items {
				id
				image {
					publicUrl
				}
				portadaImage {
					publicUrl
				}
				title
				content
				bubble
				extra
			}
		}
	}
`;
