import React,{useState} from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascritp framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }

];



const App = () =>{
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    
    
    return (
        <div>
            <Header></Header>
            <Route path="/">
                <Accordion items= {items}></Accordion>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <div>
                    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
                        {showDropdown ?
                            <div>
                                <Dropdown 
                                    selected={selected} 
                                    options={options}
                                    onSelectedChange={setSelected}
                                    label="Select Color">
                                </Dropdown>
                                <p style={{color: `${selected.value}`}}>{`This text is ${selected.value}` }</p>
                            </div>: null

                        }
                </div>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
    
}

export default App;