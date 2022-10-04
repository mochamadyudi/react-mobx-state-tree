import { render, screen } from '@testing-library/react';
import Card from '../../components/card/index'


test('render - components [card]', ()=> {
    render(
        <Card
            id={1}
            title={'Ini titlenya'}
        />
    )
    const linkElement = screen.getByTitle(/ini titlenya/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByTestId(/1/i)).toBeInTheDocument()
})