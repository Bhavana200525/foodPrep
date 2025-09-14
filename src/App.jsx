import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers";
import Riders from "./pages/Riders";
import Rides from "./pages/Rides";
import Reports from "./pages/Reports";

export default function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/riders" element={<Riders />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}
