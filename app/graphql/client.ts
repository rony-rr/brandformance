import { gql } from '@apollo/client';

export const GET_ALL_CLIENTS = gql`
	query getClients{
		allClientes(
			where: { state: "active" }, 
			sortBy: order_ASC
		) {
			id
			name
			category
			image {
				publicUrl
			}
		}
	}
`;
