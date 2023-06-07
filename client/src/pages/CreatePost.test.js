// Importujemy potrzebne biblioteki i komponenty
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreatePost from './CreatePost';

// Test sprawdza, czy komponent renderuje się poprawnie
test('renders CreatePost correctly', () => {
	// Renderujemy komponent wewnątrz Routera, ponieważ korzysta on z hooka useNavigate
	render(
		<Router>
			<CreatePost />
		</Router>
	);

	// Oczekujemy, że elementy z danymi tekstami będą obecne w dokumencie
	expect(screen.getByText('Generuj')).toBeInTheDocument();
	expect(screen.getByLabelText('Nazwa użytkownika')).toBeInTheDocument();
	expect(screen.getByLabelText('Poziom gwiaździstości:')).toBeInTheDocument();
});

// Test sprawdza, czy funkcja handleChange działa poprawnie
test('handleChange works correctly', () => {
	// Renderujemy komponent
	render(
		<Router>
			<CreatePost />
		</Router>
	);

	// Symulujemy zmianę wartości w polu formularza
	fireEvent.change(screen.getByLabelText('Nazwa użytkownika'), {
		target: { value: 'Test User' },
	});

	// Oczekujemy, że pole formularza będzie miało nową wartość
	expect(screen.getByLabelText('Nazwa użytkownika')).toHaveValue('Test User');
});
