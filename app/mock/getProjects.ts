import { useEffect, useState } from 'react';

interface IDataALl {
	data: Project[];
	error: null | any;
	loading: boolean;
}

interface IDataById {
	data?: Project;
	error: null | any;
	loading: boolean;
}

export const useGetProjects = (): IDataALl => {
	return {
		error: null,
		loading: false,
		data: [
			{
				id: '1',
				title: 'Metalub',
				intro: 'Se abrió un centro de mecánica rápida en el centro comercial Walmart de Escazú.',
				whatWeGet: 'fue una visitación cada vez más alta al taller y un nivel de recuerdo de la marca basado en la repetición en establecimientos cercanos y en los hogares de estos usuarios.',
				whatWeDid: 'fue capturar los dispositivos mobiles de Walmart para impactarles a través de diferentes formatos.',
				challenge:
					'Atraer al público y generar interés en los usuarios que iban recurrentemente a ese centro comercial.',
				thumbnail: '/static/img/projects/metalub.jpg',
				images: [
					{
						publicUrl: '/static/img/projects/metalub.jpg',
					},
					{
						publicUrl: '/static/img/projects/metalub2.jpg',
					}
				],
			},
			{
				id: '2',
				title: 'Rostipollos',
				intro: 'Se abrió el canal de Whatsapp para hacer pedidos',
				whatWeGet: 'Que el canal de Whatsapp de Rosti fuera un canal muy considerado, aunque era totalmente nuevo',
				whatWeDid: 'A través de la tecnología de pixelado de cookies, y usando machine learning, optimizar las campañas consiguiendo CTRs superiores a 1,50% y aparecer en sites muy valiosos para los usuarios que finalmente resultaban comprar a través de este canal',
				thumbnail: '/static/img/projects/rosti.png',
				challenge: `Conseguir vender a través de este canal, rompiendo el paradigma de solicitar pedidos a través de teléfono o en ventanilla.`,
				images: [
					{
						publicUrl: '/static/img/projects/rosti.png',
					},
				],
			},
			{
				id: '3',
				title: 'Hospital Clinica Biblica',
				intro: 'La campaña logró ser un éxito y el recuerdo del plan privado de Mi vida pasó a posicionarse en escasos 2 meses.',
				whatWeGet: 'Gracias al machine Learning y a la tecnología de pixelado de cookies, conseguimos 400 Leads solamente a través de formatos de Video, Display y Native Ads.',
				whatWeDid: 'Nuevo plan MI VIDA de HCB',
				thumbnail: '/static/img/projects/clinica01.jpg',
				challenge: `Conseguir persuadir a los usuarios de abrirse un plan privado de salud con HCB`,
				images: [
					{
						publicUrl: '/static/img/projects/clinica01.jpg',
					},
					{
						publicUrl: '/static/img/projects/clinica02.jpg',
					},
					{
						publicUrl: '/static/img/projects/clinica03.jpg',
					}
				],
			},
		],
	};
};

export const useGetProjectById = (dataProjects: any, id?: string) => {
	const newData: Project[] = dataProjects.filter((i: any) => i.id === id);
	return newData.length ? newData[0] : undefined;
	// const [state, setState] = useState<IDataById>({
	// 	data: undefined,
	// 	error: null,
	// 	loading: true,
	// });
	// // const { data: dataProjects } = useGetProjects();

	// useEffect(() => {
	// 	const newData: Project[] = dataProjects.filter((i) => i.id === id);
	// 	setState({
	// 		data: newData.length ? newData[0] : undefined,
	// 		error: null,
	// 		loading: false,
	// 	});
	// }, [id]);

	// return state;
};
