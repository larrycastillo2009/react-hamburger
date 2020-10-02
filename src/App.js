import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Larry', age: 30},
            {name: 'Max', age: 28},
            {name: 'Manu', age: 26}
        ]

    }

    switchNameHandler = (newName) =>{
        // console.log('Was clicked!');
        // DONT DO THIS this.state.persons[0].name = 'Hairy Larry';
        this.setState({persons: [
                {name: newName, age: 30},
                {name: 'Max', age: 28},
                {name: 'Manu', age: 28}
            ]})
    }

    nameChangedHandler =(event)=>{
        this.setState({persons: [
                {name: 'Larry', age: 30},
                {name: event.target.value, age: 28},
                {name: 'Manu', age: 28}
            ]}

        )
    }

    render() {
        const style = {
            backgroundColor:'white',
            font:'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I am a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={()=> this.switchNameHandler('Hairy Larry')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this,'Harry Larry')}
                    changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[0].age}/>

            </div>
        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does this work now?'))
    }
}

export default App;
