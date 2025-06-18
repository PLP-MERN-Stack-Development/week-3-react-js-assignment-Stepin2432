import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="font-bold">Task App</div>
      <div className="space-x-4">
        <Link to="/">Tasks</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
}