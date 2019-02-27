import React from 'react';
import Items from '../Items'
import './index.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isEmpty: true
        };
        this.input = React.createRef();
    }

    handleChange = e => {
        if (e.currentTarget.value) {
            this.setState({isEmpty: false});
        } else {
            this.setState({isEmpty: true});
        }
    }

    addItem = e => {
        if (this.input.current.value !== '') {
            var newItem = {
                text: this.input.current.value,
                key: Date.now()
            };
        }

        this.setState((prevState => {
            return {
                items: prevState.items.concat(newItem),
                isEmpty: true
            }
        }));

        
        this.input.current.value = '';     

        e.preventDefault();
    }

    deleteItem = key => {
        var filteredItems = this.state.items.filter(item => item.key !== key);
                
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="title">Todo-List in action</h1>
                <div className="todo-list">
                    <form 
                        className="todo-list__form"
                        action="" 
                        onSubmit={this.addItem}          
                    >
                        <input 
                            type="text" 
                            placeholder="Enter task"
                            ref={this.input}
                            onChange={this.handleChange}
                        />
                        <button 
                            disabled={this.state.isEmpty}
                            className={!this.state.isEmpty ? '' : 'disabled'}
                        >
                            Add
                        </button>
                    </form>
                    <Items 
                        data={this.state.items} 
                        delete={this.deleteItem} 
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default TodoList;