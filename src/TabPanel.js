import React, { useState } from 'react';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

// 定义每个tab对应的内容
const tabData = [
    {
        title: 'Lorem ipsum',
        heading: 'Lorem ipsum dolor sit amet',
        paragraph: 'Etiam vel vehicula diam. Morbi ultrices eficitur ura, ut mollis dui sagittis sit amet. Aliquam nec dolor vel erat fringilatincidunt eu vitae massa. Ut in tincidunt lectus. Aliguam sit amet felis id ipsum condimentum aliquet.'
    },
    {
        title: 'Quisque at pretium',
        heading: 'Empowering others',
        paragraph: 'Quisque at pretium ligula, sed solicitudin lorem, Donec nec elit elit. Aliquam sit amet consectetur libero. Nam semperlectus sit amet auctor fringjilla. in sit amet enim dui. Nunc varius sollicitudin felis id efficitur.'
    },
    {
        title: 'Nulla facilisi',
        heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        paragraph: 'Morbi non lacus nunc. Maecenas sit amet mattis nibh, volutpat semper odio. Nulla a mauris eu purus ultrices aliquamCras vel dignissim dolor, Aliguam vel mollis ligula. Mauris blandit vitae lilbero vel tincidunt, Nam lorem magna, iaculisin ornare ut, commodo eget nunc, Sed a quam ac magna luctus omare'
    }
];

const TabPanel = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div className="tab-panel">
            <div className="top-fixed-text">
                <span className="blue-small-text">LOREM IPSUM DOLOR SIT AMET</span>
            </div>
            <div className="middle-fixed-section">
                <Heading text="consectetur adipiscing elit" />
                <Paragraph text="Donec suscipit ex eu faucibus laoreet, Nulla non neque mauris. Quisque molestie aliquam sem eget mattis, Suspendisse vehicula nisl non quam imperdiet fringila, Sed sodales ante vel lectus vestibulum." />
            </div>
            <div className="tab-nav">
                {tabData.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTabIndex === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                <Heading text={tabData[activeTabIndex].heading} />
                <Paragraph text={tabData[activeTabIndex].paragraph} />
            </div>
        </div>
    );
};

export default TabPanel;