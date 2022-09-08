import { gql } from '@apollo/client';

export const GET_SEO_SETTING = gql`
	query getSettings {
		seoSettings: allSettings {
			seoTitle
			seoDescription
			seoMetakeywords
		}
	}
`;