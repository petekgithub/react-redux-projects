import './Counter.css';
import { useSelector, useDispatch} from "react-redux";
import {increase, decrease, reset} from '../../redux/actions/counterActions'


const Counter = () => {

    const {counter} = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();


  return (
    <div className='app'>
    <h2 className='counter-header'>Counter with Redux</h2>
    <h1 className={
        counter > 0 ? "counter-pos" : counter < 0 ?  "counter-neg" : "counter-zero"
    }>
        {counter}
    </h1>
    <div>
        <button className='counter-button positive' onClick={() => dispatch(increase())}>Increase</button>
        <button className='counter-button negative' onClick={() => dispatch(decrease())}>Decrease</button>
        <button className='counter-button zero' onClick={() => dispatch(reset())}>Reset</button>
    
    </div>
    </div>
  )
}

export default Counter