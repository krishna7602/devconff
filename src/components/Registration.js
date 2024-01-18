import React from "react";


export default function Registration(){
    return(
        <>
        <div id="registrationjs">
        <div id="sponsorsjs">
        <div className="sponsors">
          <h2>REGISTRATION FEES</h2>
          <div className="sponsorstable">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">SERIAL</th>
                  <th scope="col">Categories of Membership</th>
                  <th scope="col">Amount in INR (Excluding Taxes)</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="serialno">1</th>
                  <td>IICHE Member</td>
                  <td>5000</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="serialno">2</th>
                  <td>Non Member / Industrial Personnel</td>
                  <td>6200</td>
                  
                </tr>
                <tr>
                  <th scope="row" className="serialno">3</th>
                  <td>Research Scholar / PG Student (IICHE Member)</td>
                  <td>4500</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">4</th>
                  <td>UG Student (Student Member / Non Member)</td>
                  <td>2500</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">5</th>
                  <td>Research Scholar / PG Student (Non IICHE Member)</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">6</th>
                  <td>Foreign Delegates (IICHE Member)</td>
                  <td>USD 250</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">7</th>
                  <td>Accompanying Spouse (Foreign) (IICHE Member)</td>
                  <td>USD 250</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">8</th>
                  <td>Industrial Personnel’s (IICHE Member/ Non IICHE Member)</td>
                  <td>6500</td>
                </tr>
                <tr>
                  <th scope="row" className="serialno">9</th>
                  <td>Others (IICHE Member/ Non IICHE Member)</td>
                  <td>3200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
        </>
    );
}