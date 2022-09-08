import React from 'react';
import { EnvironmentOutlined } from "@ant-design/icons";
import TabsComponent, { InnerTab, TabPane } from "../../app/components/Molecules/Tabs";
import Title from "../../app/components/Atoms/Title/Title";

export default {
	title: 'Molecules/Tabs',
};

const Template = (args) => (
	<TabsComponent {...args}>
		{tabsData.map((tab) => (
			<TabPane key={tab.key} tab={tab.tab}>
				{tab.content}
			</TabPane>
		))}
	</TabsComponent>
);
export const Tabs = Template.bind({});

const tabsData = [
	{
		key: '1',
		tab: <InnerTab title={'Geodesia'} icon={<EnvironmentOutlined />} />,
		content: <div>Contenido 1</div>,
	},
	{
		key: '2',
		tab: (
			<InnerTab
				icon={<EnvironmentOutlined />}
				title={
					<Title color="magenta" variant="BRANDON_18_26_900">
						<strong>Segmentación</strong><br/> Optimizada
					</Title>
				}
			/>
		),
		content: <div>Contenido 2</div>,
	},
	{
		key: '3',
		tab: (
			<InnerTab
				icon={<EnvironmentOutlined />}
				title={
					<Title color="magenta" variant="BRANDON_18_26_900">
						Formatos <strong> <br/>RICH media</strong>
					</Title>
				}
			/>
		),
		content: <div>Contenido 3</div>,
	},
	{
		key: '4',
		tab: (
			<InnerTab
				icon={<EnvironmentOutlined />}
				title={
					<Title color="magenta" variant="BRANDON_18_26_900">
						Formatos <strong> <br/>Convencionales</strong>
					</Title>
				}
			/>
		),
		content: <div>Contenido 4</div>,
	},
];
