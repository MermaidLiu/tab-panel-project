TabPanel Component README

I. Component Overview

The TabPanel is a tab-switching component developed based on React. It supports content switching between multiple tabs, making it suitable for scenarios where different contents need to be displayed in the same area, such as information classification display and functional module switching.

II. Functional Features

1. Tab Switching: Click on different tabs to switch and display the corresponding content.

2. Visual Feedback: The selected tab displays a bold blue bottom line, providing a clear indication of the selected state.

3. Fixed Content Display: The component has fixed text information at the top (including small-sized blue text, a large heading, and descriptive paragraphs), which does not change with tab switching.

III. Usage

1. Installation

Ensure that your project is a React project. If creating a new project, you can use the following command:
npx create-react-app your-project-name
Place the TabPanel component file (TabPanel.js) and related dependent components (such as Heading, Paragraph) in an appropriate directory of the project (e.g., src/components).

2. Importing the Component

Import the TabPanel in the file where it is needed:
import React from'react';
import TabPanel from './path/to/TabPanel';

const App = () => {
    return (
        <div>
            <TabPanel />
        </div>
    );
};

export default App;
3. Component Props

Currently, the TabPanel component has no externally passed-in properties. All tab content and display logic are defined within the component. To extend its functionality, consider passing in custom tab data, styles, etc., through props.

IV. Code Structure

1. Core Logic
const TabPanel = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };
    return (
        // The JSX structure of the component, including the fixed text area, tab navigation bar, and content display area
    );
};
The useState hook is used to manage the index of the currently active tab (activeTabIndex). The handleTabClick function processes tab click events and updates the active state.

2. Data Definition
const tabData = [
    {
        title: 'Lorem ipsum',
        heading: 'Lorem ipsum dolor sit amet',
        paragraph: '...'
    },
    // Other tab data
];
The tabData array defines the title, corresponding heading, and paragraph content for each tab.

V. Style Description

The component styles are defined through CSS class names. The main class names and their functions are as follows:

• .tab-panel: The outermost container of the component.

• .top-fixed-text: The fixed small text area at the top.

• .middle-fixed-section: The fixed large heading and description area in the middle.

• .tab-nav: The tab navigation bar.

• .tab: A single tab, and .tab.active represents the selected tab.

• .tab-content: The content display area.

You can modify or override these styles in the corresponding CSS file according to the overall style of the project.

VI. Unit Tests

Unit tests have been written for the component and are located in the TabPanel.test.js file. The test contents include:

1. Whether the component can render normally.

2. Whether the initial active tab is correct.

3. Whether the tab click-switching function works properly.

4. Whether the content area is updated correctly after tab switching.

To run the tests, execute the following command in the root directory of the project:
npm test
VII. Change Log

• Version: 1.0.0

◦ Initial version, completing the core tab-switching function and basic styles.
