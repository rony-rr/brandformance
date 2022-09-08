import { gql } from '@apollo/client';
import { queryfy } from './helper';

export const UPLOAD_NEWSLETTER = gql`
	mutation addLead($data: LeadCreateInput) {
		createLead(data: $data) {
			id
		}
	}
`;
