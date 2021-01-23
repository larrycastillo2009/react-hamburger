import React, {Component} from 'react';
import ErrorBoundary from "../../ErrorBoundary /ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
// static getDerivedStateFromProps(props,state) {
//     console.log('[Persons.js] getDerivedStateFromProps')
//     return state;
// }
//       Deprecated not supported
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[Persons.js] componentWillRecieveProps', props);
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js shouldComponentupdate]');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] get SnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}/>
            </ErrorBoundary>
        });
    }


};

export default Persons;