import Landing from './Landing';
import { render, screen } from '@testing-library/react';

test('displays logo', () => {
	render(<Landing />);
	const image = screen.getByTitle('logo');
	expect(image).toHaveAttribute('src', 'Studio Beach Logo with Waves Icon.jpg');
});

test('links to instagram', () => {
	render(<Landing />);
	expect(screen.getByText('@dwalesska_coaching')).toHaveAttribute(
		'href',
		'https://www.instagram.com/dwalesska_coaching/'
	);
});
