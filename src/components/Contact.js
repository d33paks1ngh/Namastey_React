import { useContext } from "react";
import { username } from "../../username";

const Contact = () => {
  const data = useContext(username);
  return (
    <div className="font-bold text-center m-4 text-xl">
      <h1>Contact Us page...</h1>
      {/**test will give us error if we have more heading and testing by
      getroleby() */}
      {/* <h2>This is the contact page of Namastey React</h2> */}
      {/* <h2>{data.Name}</h2> */}
      <form className="m-8">
        <input
          type="text"
          className=" border border-black m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2"
          placeholder="message"
        />
        <button className="border border-black m-2 rounded-xl "> submit</button>
      </form>
    </div>
  );
};

export default Contact;
