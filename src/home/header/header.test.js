import Header from './Header';
import { render, fireEvent, screen } from '@testing-library/react';
import { Router, Route } from 'react-router';
import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

//fix test
test('displays contact Dania! on hover', () => {
    render(<Router history={history}>
        <Route component={Header} />
      </Router>);
    const item =  screen.getByRole('img');
    expect(fireEvent.mouseEnter(item)).toContain("Contact Dania!");    
})