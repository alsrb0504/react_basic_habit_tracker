import React, { Component } from 'react';
import Button1 from './components/button1';
import Button2 from './components/button2';

class App extends Component {
	render() {
		return (
			<>
				<Button1 />
				<Button2 />
			</>
		);
	}
}

export default App;

// import React, { Component } from 'react';
// import './app.css';
// import Habits from './components/habits';
// import Navbar from './components/navbar';

// class App extends Component {

//   state = {
// 		habits: [
// 			{ id: 1, name: 'Reading', count: 0},
// 			{ id: 2, name: 'Running', count: 0},
// 			{ id: 3, name: 'coding', count: 0}
//     ],
    
//     habit_Count : 3
// 	}

// 	handleIncrease = (habit) =>{
// 		const habits = this.state.habits.map(item=>{
// 			if(item.id == habit.id){
// 				return {...habit, count: habit.count+1};
// 			}
// 			return item;
// 		})
// 		this.setState({habits});
// 	}

// 	handleDecrease = (habit) =>{
// 		const habits = 	this.state.habits.map(item=>{
// 			if(item.id == habit.id){
// 				const count = habit.count - 1;
// 				return {...habit, count: count < 0 ? 0 : count};
// 			}
// 			return item;
// 		})
// 		this.setState({habits});
// 	}

// 	handleDelete = (habit) =>{
// 		const habits = this.state.habits.filter(item => item.name !== habit.name);
// 		this.setState({habits});
// 	};

// 	handleAdd = (name) =>{
// 		const habits = [...this.state.habits, {id:Date.now(), name, count:0}];
// 		this.setState({habits});
// 	};

// 	handleReset = ()=> {
// 		const habits = this.state.habits.map(habit =>{
// 			if(habit.count !== 0){
// 				return {...habit, count: 0};
// 			}
// 			return habit;
// 		})
// 		this.setState({habits});
// 	};

// 	render() {
//     console.log("app");
//     return (
//       <>
//           <Navbar totalCount={this.state.habits.filter(item=> item.count > 0).length}/>
//           <Habits 
//             habits={this.state.habits}
//             onIncrease={this.handleIncrease}
//             onDecrease={this.handleDecrease}
// 			onDelete={this.handleDelete}
// 			onAdd={this.handleAdd}
// 			onReset={this.handleReset}
//           />
//       </>
//     )
//   };
// }

// export default App;
