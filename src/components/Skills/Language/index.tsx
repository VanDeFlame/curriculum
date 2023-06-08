import React from 'react';
import './Language.scss';
import { Lang } from 'models/Lang.model';

function Language ({ id, name, level }: Lang) {
	return (
		<div className='Language'>
			<img
				className='Language-img'
				src={`assets/icons/languages/${id}.webp`}
				alt={`${name} flag`} />
			<span
				className='Language-name'
			>{name}</span>
			<span
				className='Language-level'
			>{level}</span>
		</div>
	);
}

export { Language };
