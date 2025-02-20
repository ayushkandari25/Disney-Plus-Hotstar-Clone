import React from "react";
import { Check, X } from "lucide-react";
import Payment from "./Payment";
import "./Styles/Midpart.css"; // Importing the CSS file

const Midpart = () => {
  return (
    <div className="midpart-container">
      <marquee className="midpart-title">
        Subscribe now and start streaming
      </marquee>

      <div className="midpart-content">
        <div className="midpart-table-container">
          <table className="midpart-table">
            <thead>
              <tr>
                <th className="midpart-th">All content</th>
                <th className="midpart-th">
                  <div className="super-text">Super</div>
                  <div className="sub-text">
                    Movies, Live sports, TV, Specials
                  </div>
                </th>
                <th className="midpart-th">
                  <div className="premium-text">Premium</div>
                  <div className="sub-text">
                    Movies, Live sports, TV, Specials
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="midpart-tbody">
              <tr>
                <td>Watch on TV or Laptop</td>
                <td>
                  <Check className="icon icon-white" />
                </td>
                <td>
                  <Check className="icon" />
                </td>
              </tr>
              <tr>
                <td>Ads free movies and shows (except sports)</td>
                <td>
                  <X className="icon icon-white" />
                </td>
                <td>
                  <Check className="icon" />
                </td>
              </tr>
              <tr>
                <td>Number of devices that can be logged in</td>
                <td className="text-white">2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Max video quality</td>
                <td>
                  <div className="text-white">Full HD</div>
                  <div className="text-white">1080p</div>
                </td>
                <td>
                  <div>4K 2160p</div>
                  <div>+ Dolby Vision</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Max audio quality</div>
                  <div className="text-xs">
                    Atmos available on select titles only
                  </div>
                </td>
                <td className="text-white">Dolby Atmos</td>
                <td>Dolby Atmos</td>
              </tr>
            </tbody>
          </table>

          {/* Subscription Period Selector */}
          <div className="subscription-buttons">
            <button className="active-button">Quarterly</button>
            <button className="inactive-button">Yearly</button>
            <button className="inactive-button">Monthly</button>
          </div>

          {/* Subscription Options */}
          <div className="subscription-options">
            <button className="subscription-card active-card">
              <div className="super-text">Super</div>
              <div className="price-text">₹299</div>
              <div className="sub-text">/3months</div>
            </button>
            <button className="subscription-card">
              <div className="premium-text">Premium</div>
              <div className="price-text">₹499</div>
              <div className="sub-text">/3months</div>
            </button>
          </div>
        </div>
        <div className="payment-section">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Midpart;
