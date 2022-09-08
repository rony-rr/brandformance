import { gql } from '@apollo/client';

export const GET_ALL_PROYECTS = gql`
	query getProyectos{
		allProyectos(
			where: { state: "active" }, 
			sortBy: order_ASC
		) {
			id
			name
			intro
			content
			conseguimos
			thumbnail {
				publicUrl
			}
			gallery1 {
				publicUrl
			}
			gallery2 {
				publicUrl
			}
			gallery3 {
				publicUrl
			}
			gallery4 {
				publicUrl
			}
		}
	}
`;
