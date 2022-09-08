import * as React from 'react';
import { Component } from 'react';
import { Button, Result } from 'antd';

class Error extends Component<any> {
	static getInitialProps({ res, err }: any) {
		const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		return { statusCode };
	}

	render() {
		const statusCode = this.props.statusCode;
		const text =
			statusCode === 500
				? 'Lo sentimos, error en el servidor'
				: 'Lo sentimos, la página que no existe.';

		return (
			<Result
				status={statusCode}
				title={statusCode}
				subTitle={text}
				extra={
					<Button type="primary" href="/">
						Regresar al inicio
					</Button>
				}
			/>
		);
	}
}

export default Error;
