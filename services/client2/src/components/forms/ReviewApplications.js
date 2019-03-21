import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'mdbreact';
import TableEditable from './TableEditable'


const columns = [
  'Field', 'Data' , 'Edit'
];
          

const TableEditablePage = (props) => {

    const data = [
          ["Domain" , props.formData.domain],          
          ["Certificate", props.formData.certificate],
          
          ["Frstname", props.formData.contact_firstname],
          ["Lastname", props.formData.contact_lastname],
          ["Email", props.formData.contact_email],
          ["Street Address", props.formData.contact_streetaddress],
          ["Country of residence", props.formData.contact_homecountry],        
          ["Phone number", props.formData.contact_phonenumber],          
          ["Company/Instituition", props.formData.contact_company_name], 
          ["Highest education",props.formData.education_highest_degree],
          ["Year degree attained",props.formData.education_year],
          ["School or University name",props.formData.education_school],
          ["City location of school/university", props.formData.education_city],
          ["Country of school/university", props.formData.education_country],
          ["Primary coding language", props.formData.general_main_language],
          ["Years of coding experience", props.formData.general_coding_years],
          ["Othe coding languages", props.formData.general_coding_languages],
          ["Industry", props.formData.general_industry],
          ["Project name", props.formData.requirements_project_name_1],
          ["Project Description", props.formData.requirements_project_description_1],  
          ["Project Start Date", JSON.stringify(props.formData.requirements_project_start_date_1)],
          ["Project Finish Date", JSON.stringify(props.formData.requirements_project_start_date_2)],
          ["Role - Responsible", JSON.stringify(props.formData.requirements_responsible)],
          ["Role - Accountable", JSON.stringify(props.formData.requirements_accountable)],
          ["Role - Consulted", JSON.stringify(props.formData.requirements_consulted)],
          ["Role - Informed", JSON.stringify(props.formData.requirements_informed)],
          ["Company Name", props.formData.requirements_project_company_1],
          ["Reference Name", props.formData.requirements_project_reference_name_1],
          ["Reference Email", props.formData.requirements_project_reference_email_1],
          ["Reference phone", props.formData.requirements_project_reference_phonenumber_1],
          ["Agree to terms", JSON.stringify(props.formData.terms_agree)]
    ]

  return(
    <Container className="mt-3">
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardHeader tag="h4" className="text-center py-4">
              {props.formData.certificate}
            </CardHeader>
            <CardBody>
              <TableEditable 
                onClick={props.onClick} 
                responsive 
                data={data} 
                columns={columns} 
                striped 
                bordered />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TableEditablePage;
