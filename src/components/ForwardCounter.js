import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  // const [counter, setCouhnter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCouhnter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const counter = useCounter();

  return <Card>{counter}</Card>
}

export default ForwardCounter;



