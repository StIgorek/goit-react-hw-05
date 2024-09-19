import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not found</h1>
      <p>
        {" "}
        Please use this link to go back <Link to="/"> Home</Link>
      </p>
    </div>
  );
}
