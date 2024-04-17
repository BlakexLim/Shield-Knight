import { RiEmotionSadLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <Link to="/">
        <h3>Page not found</h3>
        <div>
          <RiEmotionSadLine />
        </div>
      </Link>
    </div>
  );
}
