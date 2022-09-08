import React from 'react';
import { Row, Col, Divider } from 'antd';

export default { title: 'General' };

export const generalStories = () => (
	<div>
		<Row>
			<Col span={24}>
				<Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
					General
				</Divider>
			</Col>
		</Row>
	</div>
);