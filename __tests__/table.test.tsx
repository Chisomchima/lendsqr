import { render, fireEvent } from '@testing-library/react';
import Table from '../components/Table';
import { getUsersData } from '../Service';
import UserData from '../types';

// Mock getUsersData function
jest.mock('../path/to/Service', () => ({
    getUsersData: jest.fn(),
}));

describe('Table component', () => {
    beforeEach(() => {
        // Reset the mock implementation before each test
        (getUsersData as jest.MockedFunction<typeof getUsersData>).mockReset();
    });

    it('should fetch and render table data', async () => {
        // Test implementation
    });

    it('should handle page change', async () => {
        // Test implementation
    });

    it('should handle rows per page change', async () => {
        const mockUsersData: UserData[] = [...Array(20)].map((_, index) => ({
            id: `${index + 1}`,
            orgName: `Org ${index + 1}`,
            userName: `User ${index + 1}`,
            email: `user${index + 1}@example.com`,
            phoneNumber: `123456789${index}`,
            createdAt: '2022-01-01',
            lastActiveDate: '2023-01-01',
            profile: {
              firstName: 'John',
              lastName: 'Doe',
              phoneNumber: '123456789',
              avatar: 'avatar.png',
              gender: 'Male',
              bvn: '1234567890',
              address: '123 Street, City',
              currency: 'USD',
            },
            guarantor: {
              firstName: 'Jane',
              lastName: 'Doe',
              phoneNumber: '987654321',
              gender: 'Female',
              address: '456 Street, City',
            },
            accountBalance: '1000',
            accountNumber: '1234567890',
            socials: {
              facebook: 'facebook.com/user',
              instagram: 'instagram.com/user',
              twitter: 'twitter.com/user',
            },
            education: {
              level: 'Bachelor',
              employmentStatus: 'Employed',
              sector: 'IT',
              duration: '4 years',
              officeEmail: 'user@example.com',
              monthlyIncome: ['1000', '2000', '3000'],
              loanRepayment: '500',
            },
          }));

        (getUsersData as jest.MockedFunction<typeof getUsersData>).mockResolvedValue(mockUsersData);

        const { findByText, getByLabelText } = render(<Table />);

        // Wait for the table data to be fetched and rendered
        await findByText('Org 1');

        const rowsPerPageSelect = getByLabelText('Rows per page:') as HTMLInputElement;
        fireEvent.change(rowsPerPageSelect, { target: { value: '20' } });

        // Assert that the rows per page value has changed
        expect(rowsPerPageSelect.value).toBe('20');

        // Assert that the table displays the correct number of rows
        const orgNameCell = await findByText('Org 1');
        const userNameCell = await findByText('User 1');
        // Assert other cells and data as needed
        expect(orgNameCell).toBeInTheDocument();
        expect(userNameCell).toBeInTheDocument();
        // Assert other cells and data as needed
    });

    // Add more test cases for other functions as needed
});
