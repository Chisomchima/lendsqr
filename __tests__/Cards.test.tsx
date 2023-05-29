import { render } from '@testing-library/react';
import Cards from '../components/Cards'; // Update the import statement

describe('Cards', () => {
  it('renders the cards with correct data', () => {
    const { getByText } = render(<Cards />);
    
    // Assert that the cards are rendered with the correct data
    expect(getByText('Users')).toBeInTheDocument();
    expect(getByText('2,453')).toBeInTheDocument();
    
    expect(getByText('Active Users')).toBeInTheDocument();
    expect(getByText('2,453')).toBeInTheDocument();
    
    expect(getByText('Users with Loans')).toBeInTheDocument();
    expect(getByText('2,453')).toBeInTheDocument();
    
    expect(getByText('Users with Savings')).toBeInTheDocument();
    expect(getByText('2,453')).toBeInTheDocument();
  });
});
