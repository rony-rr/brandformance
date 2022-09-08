import React from 'react';
import { Row } from 'antd';
import { useQuery } from '@apollo/client';

// components
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import { CardEquipo } from 'components/Molecules/Cards';
import { Skeleton, Empty } from 'antd';

// styles
import { GET_TEAM } from 'graphql/team';
import { StyleCol, StyleWrapper } from './style';

const TeamGrid = () => {
	const { data, loading } = useQuery(GET_TEAM);

	if (loading) return <Skeleton active />;
	if (!data && !data?.allEquipos && !data?.allEquipos?.length) {
		return <Empty description="No hay información disponible" />;
	}

	const { allEquipos } = data;

	return (
		<StyleWrapper>
			<Title bold variant="BRANDON_55_65_800" color="white">
				Equipo
			</Title>
			<br />
			<Text className="max-487" variant="MONTSERRAT_16_22_400" color="white">
				En Brandformance unimos fuerzas, entre el equipo y entre nuestros
				clientes, porque juntos, somos más fuertes,
				<br />
				<br />
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				"Stronger Together"
			</Text>
			<br />
			<br />
			<br />
			<br />

			<Row
				className="row-margin"
				gutter={[50, 50]}
				justify="center"
			>
				{allEquipos.map((item: any) => (
					<StyleCol
						key={item.id}
						$orderDesk={item.order}
						$orderMobile={item.orderMovil}
					>
						<CardEquipo
							name={item.name}
							image={item?.thumbnail.publicUrl}
							position={item.puesto}
							bubble={item.textBurbuja}
							description={item.intro}
							bubblePosition={'TOP_RIGHT'}
						/>
					</StyleCol>
				))}
			</Row>
		</StyleWrapper>
	);
};

export default React.memo(TeamGrid);
