import { Route, Routes } from "react-router-dom";
import Contacts from "../routes/Contacts";
import Home from "../routes/Home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}
