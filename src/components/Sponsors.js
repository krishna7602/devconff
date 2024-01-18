import React from "react";

export default function Sponsors() {
  return (
    <>
      <div id="sponsorsjs">
        <div className="sponsors">
          <h2>SPONSORSHIP RATES</h2>
          <div className="sponsorsdescripton">
            The sponsors are entitled to nominate two complimentary delegates
            along with availing of local hospitality during the congress. They
            are also entitled to put hoardings/ Banners at the suitable
            locations provided by the organizers.
          </div>
          <div className="sponsorstable">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">SERIAL</th>
                  <th scope="col">CATAGORY</th>
                  <th scope="col">PRICE INR</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="serialno">1</th>
                  <td>Platinum Sponsorship</td>
                  <td>3000000</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="serialno">2</th>
                  <td>Gold Sponsorship</td>
                  <td>2000000</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="serialno">3</th>
                  <td>Silver Sponsorship</td>
                  <td>1500000</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">4</th>
                  <td>Delegate Kit</td>
                  <td>1000000</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">5</th>
                  <td>Lunch (each day)</td>
                  <td>500000</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">6</th>
                  <td>Dinner (each day)</td>
                  <td>500000</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">7</th>
                  <td>High Tea (First day or last day)</td>
                  <td>200000</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">8</th>
                  <td>Breakfast (each day)</td>
                  <td>200000</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">9</th>
                  <td>Tea during break</td>
                  <td>50000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
