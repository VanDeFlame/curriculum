import React from 'react';
import './Technology.scss';
import { Tech } from 'models/Tech.model';

function Technology ({ id, name }: Tech) {
	return (
		<div className='Technology'>
			<img src={`assets//icons/technologies/${id}.webp`} alt={`${name} icon`} />
			<span>{name}</span>
		</div>
	);
}

export { Technology };
