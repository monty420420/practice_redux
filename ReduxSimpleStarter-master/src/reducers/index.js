import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer //싱글 스테이트 books 와  BooksReducer 반환
});

export default rootReducer;
