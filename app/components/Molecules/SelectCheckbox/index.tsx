import React from 'react';

/** Componentes */
import { Row, Col, Button, Menu, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';


/** Styles */
import Styles from './style';

interface ICat {
	_id: string;
	titulo: string;
	slug: string;
};


interface IProps {
	changeSelect: (val: string) => void;
	options: ICat[];
	selectCat?: string;
}

const SelectCheckbox = ({
	changeSelect,
	options,
	selectCat = '',
}: IProps) => {
	const optionsCategory = options;

	const setValueCat = (val : string) => {
		changeSelect(val);
	}

	const menuCategory = (
		<Menu className="select-checkbox__menu">
			<Menu.Item key={'keycheckcat_todas'} >
				<Checkbox
					checked={selectCat ? false : true}
					onChange={() => setValueCat('')}
					name={'todas'}
				>
					Todas
				</Checkbox>
			</Menu.Item>

			{optionsCategory.map(({ _id, titulo }, i: number) => {
				return (
					<Menu.Item key={'keycheckcat_' + i}>
						<Checkbox
							checked={_id === selectCat ? true : false}
							onChange={() => setValueCat(_id)}
							value={_id}
							name={titulo}
						>
							{titulo}
						</Checkbox>
					</Menu.Item>
				);
			})}
		</Menu>
	);

	if (optionsCategory.length) {
		return (
			<Row className="blog-page__filters">
				<Col xs={5} sm={4} md={3} lg={2}>
					<Styles
						overlay={menuCategory || ''}
						placement="bottomLeft"
						className={`select-checkbox`}
					>
						<Button>
							<strong>Categoría</strong>
							<DownOutlined />
						</Button>
					</Styles>
				</Col>
			</Row>
		);
	} else {
		return null;
	}
};

export default SelectCheckbox;
