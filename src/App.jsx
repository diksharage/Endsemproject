import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Leave from "./pages/Leave";
import UserDetails from "./pages/UserDetails";
import Cart from "./pages/Cart";
import Comments from "./pages/Comments";
import Quiz from "./pages/Quiz";
import Achievements from "./pages/Achievements";
import Leaderboard from "./pages/Leaderboard";
import Attendance from "./pages/Attendance";
import OrderHistory from "./pages/OrderHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/leave"
          element={<Leave />}
        />

        <Route
          path="/users"
          element={<UserDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/comments"
          element={<Comments />}
        />

    
        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />

        <Route
         path="/achievements"
         element={<Achievements />}
        />
        <Route
         path="/attendance"
         element={<Attendance />}
        />

        <Route
         path="/orders"
         element={<OrderHistory />}
       />
</Routes>
    </BrowserRouter>
  );
}

export default App;