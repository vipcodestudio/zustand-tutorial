import useCount from '../store/useCount';

const Button = (props) => {
  const { increment, decrement } = useCount();
  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};

export default Button;
