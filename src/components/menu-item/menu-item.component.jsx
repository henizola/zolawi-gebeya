import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	MenuItemContainer,
	BackgrounImage,
	Title,
	Subtitle,
	Content,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemContainer
		onClick={() => history.push(`${match.url}${linkUrl}`)}
		size={size}
	>
		<BackgrounImage
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<Content>
			<Title>{title.toUpperCase()}</Title>
			<Subtitle>SHOP NOW</Subtitle>
		</Content>
	</MenuItemContainer>
);

export default withRouter(MenuItem);
