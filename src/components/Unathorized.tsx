import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <main>
      <h1>403 - Unauthorized!</h1>
      <p>Youd do not have permission to view this page!</p>
      <Link to={"/"}>Go to Home page</Link>
    </main>
  );
}
