import React from 'react';
import { MDBInput, MDBTable, MDBTableBody, MDBTableHead, MDBBadge  } from 'mdbreact';

const TableEssentialCriticalDS = (props) => {
  const data_checkboxes = {
    columns: [
      {
        'label': [<MDBBadge color="default">Essential</MDBBadge>, '         Pass any 4 exams from below'],
        'field': 'essential',
        'sort': 'asc'
      },
      {
        'label': [<MDBBadge color="info">Critical</MDBBadge>, '             Pass any 2 exams from below'],
        'field': 'critical',
        'sort': 'asc'
      }

    ],
    rows: [
      {
        'essential': <MDBInput label="Certified Associate in Data Science - Programming Language" type="checkbox" id="checkbox2" />,
        'critical': <MDBInput label="Certified Associate in Data Science - Non-Linear Supervised Learning Algorithms" type="checkbox" id="checkbox3" />,
      },
      {
        'essential': <MDBInput label="Certified Associate in Data Science - Data Cleaning" type="checkbox" id="checkbox4" />,
        'critical': <MDBInput label="Certified Associate in Data Science - Unsupervised Learning Algorithms" type="checkbox" id="checkbox5" />,
      },
      {
        'essential': <MDBInput label="Certified Associate in Data Science - Data Analysis" type="checkbox" id="checkbox6" />,
        'critical': <MDBInput label="Certified Associate in Data Science - Clustering Algorithms" type="checkbox" id="checkbox7" />,
      },
     {
        'essential': <MDBInput label="Certified Associate in Data Science - Data Visualization" type="checkbox" id="checkbox8" />,
        'critical': <MDBInput label="Certified Associate in Data Science - Deep Learning" type="checkbox" id="checkbox9" />,
      },
      {
        'essential': <MDBInput label="Certified Associate in Data Science - Data Acquisition" type="checkbox" id="checkbox10" />,
        'critical': <MDBInput label="" type="checkbox" id="checkbox11" />,
      },
      {
        'essential': <MDBInput label="Certified Associate in Data Science - Machine Learning Basics" type="checkbox" id="checkbox12" />,
        'critical': <MDBInput label="" type="checkbox" id="checkbox13" />,
      }
    ]
  };

  return(
    <MDBTable responsiveSm>
      <MDBTableHead columns={data_checkboxes.columns} />
      <MDBTableBody rows={data_checkboxes.rows} />
    </MDBTable>

  );
};

export default TableEssentialCriticalDS;