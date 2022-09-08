import { gql } from '@apollo/client';

export const GET_ALL_CATS = gql`
	query getCategories {
		allPostCategorias(where: { state: "active" }, sortBy: name_ASC) {
			id
			name
			slug
		}
	}
`;
