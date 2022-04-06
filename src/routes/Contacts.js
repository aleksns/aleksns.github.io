import "../App.css";
import { EMAIL } from "../services/.imports";

export default function Contacts() {
  console.log(process.env);
  return (
    <>
    <div className="contacts-container">
        <h2>
           Send me an email
        </h2>
        <p className="contacts-email">{EMAIL}</p>
    </div>
    </>
  );
}
