import React, { useEffect } from "react";
import "./DisplayRecords.css";

export const DisplayRecords: React.FC<{ totalRec: initState[] }> = ({
  totalRec,
}) => {


  return (
    <div className="dpl_records">
      <div className="rec_block">
        <table>
          <thead>
            <th>Name</th>
            <th>Id</th>
            <th>Place</th>
            <th>Education</th>
          </thead>
          <tbody>
            {totalRec?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.place}</td>
                  <td>{item.education}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
