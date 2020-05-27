import React, { useContext } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import { Directorymenu } from './directory.styles';
import DirectoryContext from '../../providers/directory/directory.context';

const Directory = () => {
	const { sections } = useContext(DirectoryContext);
	return (
		<Directorymenu>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</Directorymenu>
	);
};
export default Directory;
