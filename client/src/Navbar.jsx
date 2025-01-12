import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <nav>
        <h1>Automated Task Reminder App</h1>
        <h2 className="btn">
          {" "}
          <Link to="/addreminder" className="link">
            Add Task Reminder
          </Link>
        </h2>
      </nav>
    </div>
  );
};

export default Home;
