import React from 'react';

import { Row, Col } from 'antd';
import {
	FacebookOutlined,
	InstagramOutlined,
	LinkedinOutlined,
	YoutubeOutlined,
  CloseOutlined,
} from '@ant-design/icons';

// components
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import Button from 'components/Atoms/Button';

import { 
	StyleContatSendCard
} from './style';

interface CardContactSendProps {
	title: string;
	text: string;
  image: string;
  className: string;
};

export const CardContactSend = React.memo(({ title, text, image, className}: CardContactSendProps
) => {
	return(
		<StyleContatSendCard className={className} >
      <span className="close" >X</span>
			<img src={image} alt="contact send" />
      <Title color="black" variant="BRANDON_20_28_800">{ title }</Title>
      <Text variant="MONTSERRAT_16_22_400" color="black" >{ text }</Text>
      <div className="content__icons" >
        <Button variant="FULL_PRIMARY" icon={<FacebookOutlined />} />
        <div className="separation" />
        <Button variant="FULL_PRIMARY" icon={<InstagramOutlined />} />
        <div className="separation" />
        <Button variant="FULL_PRIMARY" icon={<YoutubeOutlined />} />
        <div className="separation" />
        <Button variant="FULL_PRIMARY" icon={<LinkedinOutlined />} />
      </div>
		</StyleContatSendCard>
	);
});