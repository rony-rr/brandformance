export const useFetchTeam = () => {
	return {
		data: [
			{
				key: '1',
				name: 'Susana Fallas',
				description: 'Responsable de Innovación, Tecnología y Trafficking',
				position: '',
				bubblePosition: 'TOP_RIGHT',
				image: '/static/img/team/SU-II.gif',
				bubbleText: 'Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta',
				order: 1,
				mobile: 2,
			},
			{
				key: '2',
				name: 'Juan Rafael Alcaraz',
				description: 'Director de Desarrollo de Negocio y Estrategia',
				position: 'CEO',
				bubblePosition: 'TOP_RIGHT',
				bubbleText: 'Las pequeñas mejoras diarias, crean grandes resultados con el tiempo',
				image: '/static/img/team/JUAN.gif',
				order: 2,
				mobile: 1,
			},
			{
				key: '3',
				name: 'Lucky',
				description: 'Asistente virtual con Inteligencia Artificial',
				position: '',
				bubblePosition: 'TOP_RIGHT',
				bubbleText: 'Hello world!',
				image: '/static/img/team/robot.png',
				order: 3,
				mobile: 3,
			},
		],
		error: null,
	};
};
