import React, { Component } from 'react';
import Habit from './habit';
import HabbitAddForm from './habitAddForm';



class Habits extends Component {
	handleIncrease = (habit) =>{
		this.props.onIncrease(habit);
	}
	handleDecrease = (habit) =>{
		this.props.onDecrease(habit);
	}
	handleDelete = (habit) =>{
		this.props.onDelete(habit);
	}
	handleAdd = (name) =>{
		this.props.onAdd(name);
	}


	render() {
		console.log("habits");
		return (
			<>
				<HabbitAddForm onAdd={this.handleAdd} />
				<ul>
				{this.props.habits.map(habit=>(
				<Habit 
					key={habit.id} 
					habit={habit} 
					onIncrease={this.handleIncrease}
					onDecrease={this.handleDecrease}
					onDelete={this.handleDelete}
				/>
				))} 
				</ul>
				<button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
			</>
		)
	}
}

export default Habits;