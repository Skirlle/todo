import React from 'react';

class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    addTask = () => {
        const { input } = this.state
        if(input) {
            this.props.addTask(input)
            this.setState({ input: '' })
        }
    }
    inputChange = event => {
        this.setState({ input: event.target.value })
    }
    render() {
        const { input } = this.state
        return(
            <div>
            <input onChange={this.inputChange} value={input}></input>
            <button onClick={this.addTask}>Добавить задачу</button>
            </div>
        )
    }
}

export default AddTask