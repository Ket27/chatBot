import { useState } from "react";
import "../styling/ScrappingStatus.css";

const ScrappingStatus = ({ scrapped}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="card">
      <div>
        <div className="card-title">Website Scrapping Status</div>
      </div>
      <div className="card-content">
        <div className="flex">
            <div className="detected-pages">
            <h3>Detected Pages</h3>
            <div className="webpages">
              {scrapped.map((scraps) => (
                <div className={`page ${selectedIndex === scraps.id && "hover"}`}
                  key={scraps.id}
                  onClick={() => setSelectedIndex(scraps.id)}
                >
                  <span>{scraps.url}</span>
                  <span className={`status ${scraps.status === "pending" ? "color-yellow" : "color-green"}`}>{scraps.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detected-pages"> 
            <h4>
              {selectedIndex === -1
                ? "Select a page to view data"
                : `Data Chunks - ${scrapped[selectedIndex - 1].url}`}
            </h4>

            {scrapped[selectedIndex - 1]?.dataChunks?.map((data, index) => (
              <div className="chunk" key={index}>
                {data}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrappingStatus;
