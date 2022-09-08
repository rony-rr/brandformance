import React from 'react';

import { Row, Skeleton } from 'antd';
import { useQuery } from '@apollo/client';

// data
import { GET_ALL_CATS } from 'graphql/categoriesPosts';

// components
import Title from 'components/Atoms/Title';
import SelectCheckbox from 'components/Molecules/SelectCheckbox';
import CardsPosts from './Posts';

// styles
import { StyleSection } from './style';

interface ICat {
	id: string;
	name: string;
	slug: string;
};

interface IAllCats {
	allPostCategorias: ICat[];
}

const SectionPosts = () => {
	const [selectCat, setSelectCat] = React.useState('');
	const { data, loading } = useQuery<IAllCats>(GET_ALL_CATS);

	if (loading) return <Skeleton active />;

	const catsArr = () => {
		return data?.allPostCategorias.map((cat: ICat) => {
			const { id, name, slug } = cat;

			return {
				_id: id,
				titulo: name,
				slug,
			};
		}) || [];
	};

	const setUseSelectCat = (value: string) => {
		setSelectCat(value);
	};

	return (
		<StyleSection>
			<Title color="primary" variant="BRANDON_55_65_800">
				<strong>BLOG</strong>
			</Title>
			<SelectCheckbox
				selectCat={selectCat}
				options={catsArr()}
				changeSelect={setUseSelectCat}
			/>
			<Row className="o--grid__Posts">
				<CardsPosts filter={selectCat} />
			</Row>
		</StyleSection>
	);
};

export default SectionPosts;
