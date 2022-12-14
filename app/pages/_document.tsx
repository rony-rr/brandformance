import React from 'react';
import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { FB_PIXEL_ID } from 'lib/fpixel';
import { GTM_ID } from 'lib/ga';

const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_ID;

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			// Step 2: Retrieve styles from components in the page
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name="msapplication-TileImage" content="/favicon.png" />
					<link
						rel="apple-touch-icon-precomposed"
						sizes="128x128"
						href="/favicon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/favicon.png"
						sizes="128x128"
					/>
					<link
						rel="icon"
						href="https://brand-formance.herokuapp.com/favicon.png"
						type="image/png"
					/>

					{/* GOOGLE FONTS */}
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>

					{/* Facebook Pixel */}
					<meta
						name="facebook-domain-verification"
						content="nnv9y8rh5w3nolqsnlwi8skfsc1kar"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
              `,
						}}
					/>
					{/* End Facebook Pixel */}

					{/* linkedin pixel */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
                _linkedin_partner_id = '${LINKEDIN_ID}';
								window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
								window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              `,
						}}
					/>

					<script
						dangerouslySetInnerHTML={{
							__html: `
                (function(l) {
									if (!l){
										window.lintrk = function(a,b){
											window.lintrk.q.push([a,b])
										};
										window.lintrk.q=[]
									}
									var s = document.getElementsByTagName("script")[0];
									var b = document.createElement("script");
									b.type = "text/javascript";
									b.async = true;
									b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
									s.parentNode.insertBefore(b, s);
								})(window.lintrk);
              `,
						}}
					/>
					{/* end linkedin pixel */}

					{/* Google Tag Manager */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
								dataLayer = [];
							`,
						}}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${GTM_ID}');
          `,
						}}
					/>
					{/* End Google Tag Manager */}
				</Head>
				<body>
					<Main />
					<noscript>
						<img
							height="1"
							width="1"
							style={{ display: 'none' }}
							alt=""
							src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_ID}&fmt=gif`}
						/>
						<img
							height="1"
							width="1"
							style={{ display: 'none' }}
							alt=""
							src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
						/>
						{/*Google Tag Manager (noscript)*/}
						{/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
						<iframe
							width="0"
							height="0"
							style={{
								display: 'none',
								visibility: 'hidden',
							}}
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
						/>
						{/*End Google Tag Manager (noscript)*/}
					</noscript>
					{/* pixel beacon */}
					<img
						alt=""
						width="1"
						height="1"
						src="https://pixel.sitescout.com/up/9232a7a61615594b"
						style={{
							visibility: 'hidden',
							position: 'absolute',
							top: -100,
						}}
					/>
					{/* End pixel beacon */}

					{/* Pixel Sitecout */}
					<img
						alt=""
						width="1"
						height="1"
						src="https://pixel.sitescout.com/iap/e279b8e9f00307a3"
						style={{
							position: 'absolute',
							left: -150,
						}}
					/>
					{/* Pixel Sitecout */}

					<NextScript />
					<script src="https://cdnjs.cloudflare.com/ajax/libs/uuid/8.1.0/uuidv4.min.js" />
					<script type="application/javascript" src="/trackingScript.js" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
