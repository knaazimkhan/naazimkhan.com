import React from 'react';
import {
	FaNodeJs,
	FaReact,
	FaJs,
	FaLaravel,
	FaPhp,
	FaHtml5,
	FaCss3Alt,
} from 'react-icons/fa';

export const FaIcon = ({ icon }) => {
	switch (icon) {
		case 'FaNodeJs':
			return <FaNodeJs />;
		case 'FaReact':
			return <FaReact />;
		case 'FaJs':
			return <FaJs />;
		case 'FaLaravel':
			return <FaLaravel />;
		case 'FaPhp':
			return <FaPhp />;
		case 'FaHtml5':
			return <FaHtml5 />;
		case 'FaCss3Alt':
			return <FaCss3Alt />;
	}
};
