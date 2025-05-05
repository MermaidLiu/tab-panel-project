import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TabPanel from './TabPanel';


test('TabPanel component renders without crashing', () => {
    render(<TabPanel />);
    const tabPanelElement = screen.getByTestId('tab-panel');
    expect(tabPanelElement).toBeInTheDocument();
});

test('Initial active tab is the first one', () => {
    render(<TabPanel />);
    const firstTab = screen.getByText('Lorem ipsum');
    expect(firstTab).toHaveClass('active');
});

test('Clicking on a tab changes the active tab', () => {
    render(<TabPanel />);
    const secondTab = screen.getByText('Quisque at pretium');
    fireEvent.click(secondTab);
    const activeTab = screen.getByRole('tab', { selected: true });
    expect(activeTab).toHaveTextContent('Quisque at pretium');
});

test('Content updates when tab is clicked', () => {
    render(<TabPanel />);
    const thirdTab = screen.getByText('Nulla facilisi');
    fireEvent.click(thirdTab);
    const contentHeading = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const contentParagraph = screen.getByText('Morbi non lacus nunc. Maecenas sit amet mattis nibh...');
    expect(contentHeading).toBeInTheDocument();
    expect(contentParagraph).toBeInTheDocument();
});