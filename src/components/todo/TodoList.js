import {useDispatch, useSelector} from 'react-redux'
import { clearTodoList } from '../../redux/actions/todoActions';
import TodoItem from './TodoItem';


const TodoList = () => {

  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();


  const handleClearList = () => {
    dispatch(clearTodoList());
  }

  return (
    <div>
      <div>
        {
          list.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />
        })
      }
      </div>
      <div className='clear-wrapper'>
        <button onClick={handleClearList}>Clear</button>
      </div>
    </div>
  )
}

export default TodoList