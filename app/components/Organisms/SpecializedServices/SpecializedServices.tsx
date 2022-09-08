import React from 'react';

// components
import * as icons from 'components/Atoms/Icons';
import { CustomIcon } from 'components/Atoms/Icons';
import Title from 'components/Atoms/Title/Title';
import Tabs, { InnerTab, TabPane } from 'components/Molecules/Tabs';
import CarouselsTab from './CaoruselTabs';

// styles
import { StyleTitle, StyleWrapper, StyleArrowLarge } from './style';

interface ServiciosProps {
	tabs: ServiciosTabProps[];
}

const SpecializedServices = ({ tabs }: ServiciosProps) => {
	const [key, setKey] = React.useState<string>();

	React.useEffect(() => {
		setKey((prev) => {
			if (!prev && tabs?.length) {
				return tabs[0].id;
			}
			return prev;
		});
	}, [tabs]);

	const tabsData = React.useMemo(() => {
		if (tabs?.length) {
			return tabs.map((item) => {
				const iconRender = item.icon;
				return {
					key: item.id,
					tab: (
						<InnerTab
							icon={<CustomIcon icon={icons[iconRender]} />}
							title={
								<Title
									color="magenta"
									variant="BRANDON_18_26_900"
									html={item.tab}
								/>
							}
						/>
					),
					content: <CarouselsTab items={item.items} />,
				};
			});
		}
		return [];
	}, [tabs]);

	return (
		<StyleWrapper>
			<StyleTitle color="magenta" variant="BRANDON_55_65_800">
				<b>Servicios</b> especializados
			</StyleTitle>
			<StyleArrowLarge>
				<CustomIcon icon={icons['SVGArrowLarge']} />
			</StyleArrowLarge>
			<Tabs key={key} activeKey={key} onTabClick={(key) => setKey(key)}>
				{tabsData.map((tab) => (
					<TabPane forceRender={true} key={tab.key} tab={tab.tab}>
						{tab.content}
					</TabPane>
				))}
			</Tabs>
		</StyleWrapper>
	);
};

export default React.memo(SpecializedServices);
