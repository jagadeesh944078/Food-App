const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold p-2 m-4">Contact-Us</h1>
      <form>
        <input
          type="text"
          name="name"
          className="p-2 m-4 border border-black"
        />
        <input
          type="text"
          name="message"
          className="p-2 m-4 border border-black"
        />
        <button className="border border-black p-2 rounded-md bg-gray-400">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
