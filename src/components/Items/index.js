import React from 'react';
import FlipMove from 'react-flip-move';

class Items extends React.Component {
    renderItem = item => {
        return (
            <li 
                className="todo-list__item"
                key={item.key} 
                onClick={() => {this.handleDelete(item.key)}}
            >
                {item.text}
                <span className="todo-list__delete-icon">&#x2716;</span>
            </li>
        );
    }

    handleDelete = key => this.props.delete(key);

    render() {
        const items = this.props.data.map(this.renderItem);

        return (
            <ul className="todo-list__items">
                <FlipMove duration={150} easing="ease-out">
                    {items}
                </FlipMove>
            </ul>
        );
    }
}

export default Items;