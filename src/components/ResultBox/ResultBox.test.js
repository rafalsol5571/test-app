import { render, screen, cleanup } from 'react-dom';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';


describe('Component ResultBox', () => {
    it('should render without crushing', () => {
       render(<ResultBox from="PLN" to="USD" amount={100} />);
    });


    it('should render proper info about conversion when PLN -> USD', () => {

        const testCases = [
            { from: 'PLN', to: 'USD', amount: '100', output: 'PLN 100.00 = $28.57' },
            { from: 'PLN', to: 'USD', amount: '20', output: 'PLN 20.00 = $5.71' },
            { from: 'PLN', to: 'USD', amount: '456', output: 'PLN 456.00 = $130.28' },
            { from: 'PLN', to: 'USD', amount: '938', output: 'PLN 938.00 = $268.00' },
        ];

        for(const testObject of testCases) {
       
        render(<ResultBox from={testObject.from} to={testObject.to} amount={testObject.amount} />);

        const output = screen.getByTestId("output");

        expect(output).toHaveTextContent(testObject.output);

        cleanup()
    }
    })

    it('should render proper info about conversion when USD -> PLN', () => {

        const testCases = [
            { from: 'USD', to: 'PLN', amount: '28.57', output: '$28.57 = PLN 100.00' },
            { from: 'USD', to: 'PLN', amount: '5.71', output: '$5.71 = PLN 20.00' },
            { from: 'USD', to: 'PLN', amount: '130.28', output: '$130.28 = PLN 456.00' },
            { from: 'USD', to: 'PLN', amount: '268.00', output: '$268.00 = PLN 938.00' },
        ];

        for(const testObject of testCases) {
       
        render(<ResultBox from={testObject.from} to={testObject.to} amount={testObject.amount} />);

        const output = screen.getByTestId("output");

        expect(output).toHaveTextContent(testObject.output);

        cleanup()
        };
    })
});