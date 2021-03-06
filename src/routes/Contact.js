import "../App.css";
import { EMAIL } from "../services/.imports";

export default function Contact() {
  return (
    <>
      <h2 className="section header-section" style={{ marginBottom: "0.5em" }}>
        CONTACT
      </h2>
      <div className="contact-container">
        <h2>For any questions please send me an email</h2>
        <p className="contacts-email">{EMAIL}</p>
        <h2>Or message me on social media</h2>
      </div>
    </>
  );
}
