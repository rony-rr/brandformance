import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/client';

// Data
import { UPLOAD_NEWSLETTER } from 'graphql/newsletter';

// Styles
import { StyleNewsletter, StyleForm } from './style';

interface IPropMutation {
  email: string;
}

interface GraphReq {
	data: IPropMutation;
}

interface GraphRes {
	createLead: IPropMutation;
}

const NewsletterComponent = () => {
	const [activeOk, setActiveOk] = useState(false);
	const [loading, setLoading] = useState(false);

	const [
		addNewsletter,
		{ data, loading: loadingMutation, error },
	] = useMutation<GraphRes, GraphReq>(UPLOAD_NEWSLETTER, {
		onCompleted: () => {
			setLoading(false);
			setActiveOk(true);
		},
		onError: (e) => {
			setLoading(false);
		},
	});

	const onFinish = (values: any) => {
		setLoading(true);
		if (values) {
			const email : string = values.email;
			addNewsletter({ variables: { data: { email: email } } });
		} else {
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo: any) => {};

	return (
		<StyleNewsletter xs={24} sm={24} md={24} lg={7} className="o-newsletter">
			{error && `No se pudo registrar`}
			<StyleForm
				name="basic"
				className="o-form"
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="CORREO ELECTRÓNICO"
					name="email"
					rules={[
						{
							type: 'email',
							message: 'No es un email válido!',
						},
						{
							required: true,
							message: 'Porfavor ingrese su email!',
						},
					]}
				>
					{activeOk || <Input placeholder="Correo electrónico" />}
				</Form.Item>
				{activeOk || (
					<Form.Item wrapperCol={{ offset: 8, span: 8 }}>
						{loading ? (
							`Registrando...`
						) : (
							<Button type="primary" htmlType="submit">
								Enviar
							</Button>
						)}
					</Form.Item>
				)}
				{activeOk && (
					<Form.Item wrapperCol={{ offset: 2, span: 20 }}>
						Registro exitoso!
					</Form.Item>
				)}
			</StyleForm>
		</StyleNewsletter>
	);
};

export default NewsletterComponent;
