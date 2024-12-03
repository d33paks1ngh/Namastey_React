import { useContext } from "react";
import { username } from "../../username";

const Contact = () => {
  const data= useContext(username);
  return (
    <div className="font-bold text-center">
      <h1>Contact Us page...</h1>
      <h2>This is the contact page of Namastey React</h2>
      <h2>{data.Name}</h2>
    </div>
  );
};

export default Contact;
