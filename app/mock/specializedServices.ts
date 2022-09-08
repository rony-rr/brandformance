interface arrIProps {
	title: string;
	content: string;
	image: string;
}

interface IResData {
	key: string;
	tab: string;
	icon: IconType;
	arrObj: arrIProps[];
}

interface IProps {
	data: IResData[];
	error: null | string;
}

export const useSpecializedServices: () => IProps = () => ({
	data: [
		{
			key: 'geodesia',
			tab: '<b>Geodesia</b>',
			icon: 'SVGGeo',
			arrObj: [
				{
					title: '',
					content:
						'/static/img/servicios-especializados/estrategias-geodesicas.png',
					image: '/static/img/elements/SE/SO.png',
					cta: '<b>Agendar</b> Llamada',
					isPortada: true,
				},
				{
					title: '<b>Capas de inteligencia</b>',
					content: `Ayudamos a la mejor <b>planificación, selección y compra de medios exteriores,</b> considerando comercios cercanos, visibilidad, posibilidad de impactos secundarios en establecimientos cercanos, o la afluencia y <b>tráfico de personas en los puntos de circuito propuesto</b>`,
					image: '/static/img/elements/geodesia_img.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Ooh + Mobile</b>',
					content: `Recopilación de los <b>celulares cercanos a un anuncio exterior</b> para IMPACTARLES DIGITALMENTE en el momento que se quiera:
											<ul>
												<li><b>Segundo impacto</b> en establecimientos/restaurantes cercanos.</li>
												<li><b>Tercer impacto</b> en sus hogares.</li>
											</ul>`,
					image: '/static/img/elements/SE/OH+MOVIL.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Ooh + atribución</b>',
					content: `Recopilación de los <b>celulares cercanos</b> a un anuncio exterior para IMPACTARLES DIGITALMENTE <b>hasta conseguir compra OFFLINE / COMPRA ONLINE.</b>`,
					image: '/static/img/elements/SE/OH+A.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Ultimate Ooh</b>',
					content: `La <b>combinación</b> de las estrategias anteriores:
											<ul>
												<li><b>Generación de audiencias</b> expuestas a los OOH</li>
												<li><b>Impactos secuenciales</b> digitales</li>
												<li><b>Drive to Store Offline & Online</b></li>
											</ul>`,
					image: '/static/img/elements/SE/OH+M.png',
					cta: '<b>Agendar</b> Llamada',
				},
			],
		},
		{
			key: 'entrega_campana',
			tab: 'Entrega de <b>Campaña</b>',
			icon: 'SVGSegmentation',
			arrObj: [
				{
					title: '',
					content: `/static/img/servicios-especializados/entrega-campaña.png`,
					image: '/static/img/elements/SE/RMEDIA.png',
				},
				{
					title: '',
					content: `/static/img/servicios-especializados/servicios-2.png`,
					image: '',
					cta: '',
					isPortada: true,
					isFullImage: true,
				},
				{
					title: '<b>Whitelist</b>',
					content: `<b>Selección y optimización</b> en un <b>listado</b> de <b>sites</b> escogidos <b>manualmente</b>, según criterios de temática, cantidad de visitas, calidad de los espacios, y otros aspectos`,
					image: '/static/img/elements/segmentacion.png',
				},
				{
					title: '<b>GEO</b>',
					content: `<b>Incluya o excluya</b> puntos <b>GEOLOCALIZADOS</b> para impactar o evitar impactar a los dispositivos que estén en esos sitios concretos en el momento de la campaña.
											<br />
											Sus impresiones se mostrarán a los <b>usuarios</b> que estén <b>navegando</b> en ese <b>momento</b> en esa <b>localización.</b>`,
					image: '/static/img/elements/SE/GEO.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Contextual</b>',
					content: `Es un modo de entrega que permite optimizar sobre <b>temáticas</b> de <b>contenido estandarizadas por la IAB*.</b>
										<br /><br />
										Permite descubrir Sites y Apps para incluir en whitelists futuros.`,
					image: '/static/img/elements/SE/CONTEXTUAL.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Interacción</b>',
					content: `Prepare creatividades interesantes por la  las diferentes interacciones que los usuarios hayan podido tener con su marca.
										<br /><br />
										Se trata del <b>Retargeting más avanzado</b>, pensando en si el usuario <b>visitó</b> la página, <b>interactuó</b> con un Ad, hizo un lead.`,
					image: '/static/img/elements/SE/INTERACCION.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Idioma</b>',
					content: `Otra forma de entrega de la campaña puede ser por los idiomas que tengan los usuarios sus dispositivos.
										Es perfecto si la segmentación quiere hacerse a personas <b>nacionales</b> o <b>internacionales</b>, o porque el idioma sea una <b>razón evidente para segmentar sobre el target a alcanzar.</b>`,
					image: '/static/img/elements/SE/IDIOMA.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Data mining</b>',
					content: `Atraiga <b>usuarios similares a los que acceden a su website o APP</b>, y consiga mayor eficiencia en sus campañas de publicidad digital,
										y mayor eficacia para su negocio.`,
					image: '/static/img/elements/SE/DATAMINING.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Dispositivo</b>',
					content: `Además de poder impactar por dispositivos <b>Desktop</b>, <b>Mobile</b>, o <b>Tablet</b>, podrá segmentar por <b>operador telefónico</b>, <b>modelo</b>, <b>fabricante.</b>`,
					image: '/static/img/elements/SE/DISPOSITIVO.png',
					cta: '<b>Agendar</b> Llamada',
				},
				{
					title: '<b>Días y horas</b>',
					content: `Calendarice la entrega de sus anuncios enfatizando <b>días especiales, u horas,</b> sincronizado con el <b>cierres o apertura de su negocio, emisión de anuncios de TV.</b>`,
					image: '/static/img/elements/SE/DH.png',
					cta: '<b>Agendar</b> Llamada',
				},
			],
		},
		{
			key: 'formatos_pauta',
			tab: 'Formatos de <b>Pauta</b>',
			icon: 'SVGRich',
			arrObj: [
				{
					title: '',
					content: `/static/img/servicios-especializados/rising-start.png`,
					image: '/static/img/elements/SE/FC.png',
					isPortada: true,
				},
				{
					title: '<b>Rising star</b>',
					content: `Los formatos rising star son los que por su <b>naturaleza innovadora</b>, llaman la atención de los usuarios.
											<br /><br />
											Suelen ser <b>interactivos</b> y <b>no pueden ser intrusivos ni molestos para la navegación de los usuarios.</b>`,
					image: '/static/img/elements/SE/RS.png',
					bubble: 'ADAPTADOS PARA MOBILE, DESKTOP Y TABLETS',
					extraSummary: `Los usuarios no queremos Interstitials`,
				},
				{
					title: '<b>Convencional</b>',
					content: `Los formatos convencionales consiguen mayor difusión de un mensaje, alcanzando <b>mayor cobertura.</b>
											<br /><br />
											Display, Video, Native Ads, Audio.`,
					image: '/static/img/elements/SE/CV.png',
					bubble: 'Display, Video, Native Ads, Audio y push ads',
					bubblePosition: 'top-left'
				},
			],
		},
	],
	error: null,
});
