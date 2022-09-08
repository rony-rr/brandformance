import React from 'react';
import { TabPaneProps } from 'antd/lib/tabs';
import { Tabs } from 'antd';

import Title from 'components/Atoms/Title';

import { StyleTabContent, StyleTabIcon, StyleTabPane } from './style';

interface IProps extends TabPaneProps {
}

const TabPane = ({ ...props }: IProps) => {
	return <Tabs.TabPane {...props} />;
};

interface IPropsInnerTab {
	title: React.ReactNode,
	icon: React.ReactNode
}

export const InnerTab = ({ icon, title }: IPropsInnerTab) => {
	return (
		<StyleTabPane>
			<StyleTabIcon>{icon}</StyleTabIcon>
			<StyleTabContent>
				{typeof title === 'string' ? (
					<Title
						bold
						color="magenta"
						style={{ minWidth: 120 }}
						variant="BRANDON_18_26_900"
						html={title}
					/>
				) : title}
			</StyleTabContent>
		</StyleTabPane>
	);
};

export default TabPane;
