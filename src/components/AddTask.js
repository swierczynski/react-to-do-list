import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
    state = { 
        inputValue:'',
        important: false,
        date: new Date().toISOString().slice(0,10)
     }
    handleChange = e => {
        if(e.target.type === 'text') {
            this.setState({
                inputValue: e.target.value
            })
        } else if (e.target.type === 'checkbox') {
            this.setState({
                important: e.target.checked
            })
        } else if (e.target.type === 'date') {
            this.setState({
                date: e.target.value
        })
    }
    }
    handleClick =()=> {
        const {inputValue, important, date} = this.state;
        if(inputValue.length < 2) return alert('Za mało znaków')
        const add = this.props.add(inputValue, date, important)
        if(add) {
            this.setState({
                inputValue:'',
                important: false,
                date: new Date().toISOString().slice(0,10)  
            })
        }
    }
    
    render() { 
        const minDate = new Date().toISOString().slice(0,10);
        let maxDate = minDate.slice(0,4) * 1 + 1
        maxDate = maxDate + minDate.slice(4,10)
        return ( 
            <>
                <input type="text" 
                placeholder='wpisz zadanie...'
                value={this.state.inputValue}
                onChange={this.handleChange}
                />
                <label htmlFor="important">
                <input id='important' type="checkbox" checked={this.state.important} id='important' onChange={this.handleChange}/>
                    Priorytet
                </label>
                <br/>
                <label htmlFor="date">
                    Do kiedy zrobić: 
                    <input type="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleChange}/>
                </label>
                <button className='addTask' onClick={this.handleClick}>Dodaj</button>
                
                <hr/>
            </>
         );
    }
}
 
export default AddTask;