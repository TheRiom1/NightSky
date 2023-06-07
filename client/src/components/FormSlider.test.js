// Importujemy potrzebne narzędzia
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DiscreteSlider from './FormSlider';

describe('FormSlider', () => {
	// Test sprawdzający, czy komponent się poprawnie renderuje
	it('Poprawnie renderuje komponent', () => {
		const { getByLabelText } = render(
			<FormSlider
				labelName='Testowy suwak'
				name='testowySuwak'
				minValue={0}
				maxValue={10}
			/>
		);

		expect(getByLabelText('Testowy suwak')).toBeInTheDocument();
	});

	// Test sprawdzający, czy przekazane propsy są poprawnie wyświetlane
	it('Wyświetla przekazane propsy', () => {
		const { getByLabelText } = render(
			<FormSlider
				labelName='Testowy suwak'
				name='testowySuwak'
				minValue={0}
				maxValue={10}
			/>
		);

		expect(getByLabelText('Testowy suwak')).toHaveAttribute('min', '0');
		expect(getByLabelText('Testowy suwak')).toHaveAttribute('max', '10');
	});

	// Test sprawdzający, czy interakcje z suwakiem działają poprawnie
	it('Obsługuje interakcje z suwakiem', () => {
		const handleChange = jest.fn();
		const { getByLabelText } = render(
			<FormSlider
				labelName='Testowy suwak'
				name='testowySuwak'
				minValue={0}
				maxValue={10}
				handleChange={handleChange}
			/>
		);

		const slider = getByLabelText('Testowy suwak');
		fireEvent.change(slider, { target: { value: '5' } });

		expect(handleChange).toHaveBeenCalled();
	});
});
