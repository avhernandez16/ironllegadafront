import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IronLlegada from '../../../../src/components/pages/ironLlegada/IronLlegada.jsx';

describe('Pruebas en <IronLlegada />', () => {
  test('El numero de remision debe ser entre 10 y 20 numeros', () => {
    render(<IronLlegada />);

    // Encuentra el input de numero_remision
    const inputNumeroRemision = screen.getByPlaceholderText('Numero Remision');

    // Ingresa un valor que no cumple con la condición (menos de 10 caracteres)
    fireEvent.change(inputNumeroRemision, { target: { value: '123456789' } });

    // Asegúrate de que se haya mostrado el mensaje de error
    expect(screen.getByText('El numero de remision debe ser entre 10 y 20 numeros')).toBeInTheDocument();

    // Ingresa un valor que cumple con la condición (entre 10 y 20 caracteres)
    fireEvent.change(inputNumeroRemision, { target: { value: '1234567890' } });

    // Asegúrate de que el mensaje de error ya no esté visible
    expect(screen.queryByText('El numero de remision debe ser entre 10 y 20 numeros')).toBeNull();
  });
});
