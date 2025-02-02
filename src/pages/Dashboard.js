import Button from "../components/Button";
import ScrappingStatus from "../components/ScrappingStatus";
import SetUp from "../components/SetUp";
import "../styling/Dashboard.css" 
import { useEffect, useState } from "react";

const dummyPages = (url) => {
  const dummy = [
    {
      id: 1,
      url: `${url}/home`,
      status: "scraped",
      dataChunks: [
        "Welcome to the Corp",
        "We provide top-notch services.",
        "Contact us for more details.",
      ],
    },
    {
      id: 2,
      url: `${url}/about`,
      status: "scraped",
      dataChunks: [
        "This Corp was founded in 2020.",
        "Our mission is to revolutionize the industry.",
        "We have a team of experienced professionals.",
      ],
    },
    {
      id: 3,
      url: `${url}/services`,
      status: "pending",
      dataChunks: [],
    },
    {
      id: 4,
      url: `${url}/contact`,
      status: "scraped",
      dataChunks: [
        `Email us at support.`,
        "Call us at +1 234 567 890",
        "Visit our office in New York.",
      ],
    },
    {
      id: 5,
      url: `${url}/blog`,
      status: "pending",
      dataChunks: [],
    },
    {
      id: 6,
      url: `${url}/careers`,
      status: "scraped",
      dataChunks: [
        "Join our team today!",
        "We are hiring developers and marketers.",
        "Apply now to become part of our company.",
      ],
    },
    {
      id: 7,
      url: `${url}/faq`,
      status: "pending",
      dataChunks: [],
    },
  ];

  return dummy;
};

const Dashboard = ({formDetails, setFormDetails}) => {
  const [formSubmitted, setFormSubmitted] = useState(null);
  const [scrapped, setScrapped] = useState([]);

  useEffect(() => {
    if (formSubmitted) {
        const scrappedData = dummyPages(formDetails.websiteUrl);
        setScrapped(scrappedData);
      }
  }, [formSubmitted, formDetails.websiteUrl])

  return (
    <div className="container">
      <SetUp
        formDetails={formDetails}
        setFormDetails={setFormDetails}
        setFormSubmitted={setFormSubmitted}
      />
      {formSubmitted && <ScrappingStatus scrapped = {scrapped}/>}
      {formSubmitted && (<Button />)}
    </div>
  );
};

export default Dashboard;
