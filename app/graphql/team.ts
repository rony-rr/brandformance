import { gql } from '@apollo/client';

export const GET_TEAM = gql`
	query getTeam{
		allEquipos(
			where: { state: "active" },
			sortBy: order_ASC
		) {
			id
			name
			textBurbuja
			thumbnail {
				publicUrl
			}
			intro
			puesto
			order
			orderMovil
		}
	}
`;
