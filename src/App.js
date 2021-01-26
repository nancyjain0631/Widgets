import React from 'react';
import Accordion from './components/Accordion';

const items=[
    {
        title:'What is React?',
        content:'React is a front end JS framework.'
    },
    {
        title:'Why use React?',
        content:'React is a favourite JS library among engineers.'
    },
    {
        title:'How do you use React?',
        content:'You can use React by creating components.'
    }
];

export default () =>(
    <div>
        <Accordion items={items} />
    </div>
);