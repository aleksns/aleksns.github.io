import "../App.css";
import { EMAIL } from "../services/.imports";

export default function ContactMe() {
  return (
    <>
    <div className="contactme-container">
        <h2>
           Send me an email
        </h2>
        <p className="contacts-email">{EMAIL}</p>
    </div>
    </>
  );
}
