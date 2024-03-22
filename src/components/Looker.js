import Iframe from "react-iframe";

// Displaying the looker data througth Iframe
const Looker = () => {
  return (
    <div className="">
      <Iframe
        src="https://lookerstudio.google.com/embed/reporting/fb0b23d2-cc37-42b0-b486-95257defd53e/page/p_lr7s3medfd"
        position="absolute"
        width="100%"
        id="myId"
        className="myClassnamne"
        height="100vh"
        styles={{ height: "100vh" }}
      />
    </div>
  );
};

export default Looker;
