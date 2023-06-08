import React from 'react';
import './Contact.scss';
import { IconPhone, IconLocation, IconEmail, IconLinkedin } from 'components/icons';

const PhoneNumber = process.env.PHONE;

function Contact () {
	return (
		<div className='Contact'>
			{ PhoneNumber && (
				<div className='Contact-item phone'>
					<span className='Contact-item-info'>
						{ PhoneNumber }
					</span>
					<IconPhone />
				</div>
			)}
			<div className='Contact-item location'>
				<a className='Contact-item-info' href='https://www.google.com/maps/place/Argentina/'>
          Argentina
				</a>
				<IconLocation />
			</div>
			<div className='Contact-item email'>
				<a className='Contact-item-info' href='mailto:vandeflame@gmail.com?subject=Work'>
          vandeflame@gmail.com
				</a>
				<IconEmail />
			</div>
			<div className='Contact-item linkedin'>
				<a className='Contact-item-info' href='https://www.linkedin.com/in/vandeflame/'>
          linkedin.com/in/vandeflame
				</a>
				<IconLinkedin />
			</div>
		</div>
	);
}

export { Contact };
