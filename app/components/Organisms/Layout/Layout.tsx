import React from 'react';
import useScrollDirection from 'hook/useScrollDirection';

// components
import PolicyCookie from 'components/Molecules/PolicyCookie';
import Footer from 'components/Organisms/Footer';
import Navbar from 'components/Organisms/Navbar';

// import interface
import { SeoInterface } from 'utils/Interfaces';

// import SEO Components
import Seo from './Seo';

// styles
import { StyleContent, StyleFooter, StyleHeader, StyleLayout } from './style';

interface IProps {
	children: JSX.Element;
	className?: string;
	typeSeo?: string;
	seoSettings: SeoInterface;
}

const Layout = ({ children, className, seoSettings }: IProps) => {
	const { scrollPositionAtTop } = useScrollDirection(true, 0, 20);

	const innerClassName = React.useMemo(() => {
		if (!scrollPositionAtTop) {
			return 'bgSolid';
		}
		return '';
	}, [scrollPositionAtTop]);

	return (
		<>
			<Seo seoSettings={seoSettings} />
			<StyleLayout className={className}>
				{/* TODO: create header */}
				<StyleHeader className={innerClassName}>
					<Navbar isSolid={scrollPositionAtTop} />
				</StyleHeader>
				<StyleContent>{children}</StyleContent>
				<StyleFooter>
					<Footer />
				</StyleFooter>
				<PolicyCookie />
			</StyleLayout>
		</>
	);
};

export default React.memo(Layout);
