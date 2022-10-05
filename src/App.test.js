/**
 * @jest-environment node || jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
    render(<App />)
    const linkElement = screen.getByTestId(/1/i)
    expect(linkElement).toBeInTheDocument();
});