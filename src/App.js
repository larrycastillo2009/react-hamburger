import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: '1',name: 'Larry', age: 30},
            {id: '2',name: 'Max', age: 28},
            {id: '3',name: 'Manu', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false

    }


    nameChangedHandler = (event) => {
        this.setState({
                persons: [
                    {name: 'Larry', age: 30},
                    {name: event.target.value, age: 28},
                    {name: 'Manu', age: 28}
                ]
            }
        )
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        // ES6 Synthx for copying the array
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1p x solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}/>
                    })}
                </div>
            );
        }


        return (
            <div className="App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={() => this.togglePersonsHandler()}>Toggle Persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does this work now?'))
    }
}

export default App;
