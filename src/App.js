import React from 'react';
import TabPanel from './TabPanel';
import './App.css';

const tabs = [
  {
    title: 'Lorem ipsum',
    heading: 'Lorem ipsum dolor sit amet',
    paragraph: 'Donec suscipit ex eu faucibus laoreet. Nulla non neque mauris. Quisque molestie aliquam sem eget mattis. Suspendisse vehicula nisl non quam imperdiet fringilla. Sed sodales ante vel lectus vestibulum.'
  },
  {
    title: 'Quisque at pretium',
    heading: 'consectetur adipiscing elit',
    paragraph: 'Morbi non lacus nunc. Maecenas sit amet mattis nibh, volutpat semper odio. Nulla a mauris eu purus ultrices aliquam. Cras vel dignissim dolor. Aliquam vel mollis ligula. Mauris blandit vitae libero vel tincidunt. Nam lorem magna, iaculis in ornare ut, commodo eget nunc. Sed a quam ac magna luctus ornare.'
  },
  {
    title: 'Nulla facilisi',
    heading: 'Lorem ipsum dolor sit amet',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

function App() {
  return (
    <div className="App">
      <TabPanel tabs={tabs} />
    </div>
  );
}

export default App;