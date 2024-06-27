import React from 'react';
import getConfig from 'next/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, icons }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p>{description}</p>
						<div className="text-center">
							<div className="social-icons">
								{icons.map((item, index) => (
									<a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="me-3">
										<FontAwesomeIcon icon={item.icon} size="2x" />
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt="profile of dedeepya"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, subtitle, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container  d-flex flex-column align-items-center">
				<h1 className="text-primary fw-bold">{title}</h1>
				<br></br>
				<h5 className="text fw-bold" style={{ color: '#365B6D' }}>{subtitle}</h5>
				<div className="px-sm-5 d-flex flex-row flex-wrap justify-content-center">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}