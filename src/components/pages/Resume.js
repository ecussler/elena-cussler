import React from "react";
import { Link } from 'react-router-dom';
import PDFResume from '../../assets/2023_Resume.pdf';

function Resume() {
  return (
    <div className="flex flex-col w-full lg:flex-row m-2">
      <div className="card bg-glass text-primary m-2 max-w-md">
        <div className="card-body pl-10">
          <h2 className="card-title">
            Checkout my resume for more of my work history.
          </h2>
          <p>
            Take a look to the side for a brief overview of my development
            skills.
          </p>
          <div className="card-actions justify-end">
            <a href={PDFResume} target='_blank' className="btn">View Resume</a>
          </div>
        </div>
      </div>
      {/* <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div> */}
      <div className="divider lg:divider-horizontal"></div>
      <div className="card bg-glass flex-grow bg-glass text-primary pr-10">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Front End</th>
                <th>Back End</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>JavaScript ES6+</td>
                <td>MySQL/Sequelize</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>HTML</td>
                <td>MongoDB</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>React</td>
                <td>Mongoose</td>
              </tr>
              {/* row 4 */}
              <tr>
                <td>Handlebars</td>
                <td>Node.js</td>
              </tr>
              {/* row 5 */}
              <tr>
                <td>Bootstrap</td>
                <td>NoSQL</td>
              </tr>
              {/* row 6 */}
              <tr>
                <td>Tailwind/DaisyUI</td>
                <td>Express</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        content
      </div> */}
    </div>
  );
}

export default Resume;
