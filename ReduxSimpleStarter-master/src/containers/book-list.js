import React, { Component } from 'react';
//container는 redux에 의해 만들어지는 스테이트를 직접 접근하는 컴포넌트
//책리스트 랜더링하는 컴포넌트
export default class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
                 //key는 유니크한값이어야하기에 사용, {book.title} 책제목
            );
        });
    }
    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}