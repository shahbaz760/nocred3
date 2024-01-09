import moment from 'moment';

const containerStyle =
  'max-width: 800px; margin: 20px 0; padding: 10px; background-color: #ffffff; font-family: sans-serif;';
const tableStyle = 'width: 100%';
const h1Style = 'color: #6e00ff; margin: 0 0 20px 0';
const h2Style = 'color: #6e00ff; margin: 40px 0 10px';
const tableLabelStyle =
  'padding: 10px; padding-left: 0; width: 40%; font-weight: 500; color:#000; font-size: 18px';
const tableValueStyle =
  'padding: 10px; padding-right: 0; width: 60%; color:#4a4a4a; font-size: 16px';

export const contactFormTemplate = (values: any) => {
  return `<div style='${containerStyle}'>
      <h1 style='${h1Style}'>User contact us form</h1>
      <table style='${tableStyle}'>
          <tr>
            <td style='${tableLabelStyle}'>Name</td>
            <td style='${tableValueStyle}'>${values.first_name} ${values.last_name}</td>
          </tr>
         <tr>
          <td style='${tableLabelStyle}''>Email address</td>
          <td style='${tableValueStyle}'>${values.email}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}''>Phone number</td>
          <td style='${tableValueStyle}'>${values.phone}</td>
        </tr> 
        <tr>
          <td style='${tableLabelStyle}''>Message</td>
          <td style='${tableValueStyle}'>${values.message}</td>
        </tr> 
      </table>
    </div>`;
};

export const postCaseFormTemplate = (values: any) => {
  return `<div style='${containerStyle}'>
      <h1 style='${h1Style}'>Case Detail</h1>
      <h2 style='${h2Style}'>Client's Personal Details</h2>
      <table style='${tableStyle}'>
          <tr>
            <td style='${tableLabelStyle}'>Name</td>
            <td style='${tableValueStyle}'>${values.full_name}</td>
          </tr>
          <tr>
            <td style='${tableLabelStyle}'>Phone number</td>
            <td style='${tableValueStyle}'>${values.phone_number}</td>
          </tr>
         <tr>
          <td style='${tableLabelStyle}'>Email address</td>
          <td style='${tableValueStyle}'>${values.email_address}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Date of birth</td>
          <td style='${tableValueStyle}'>
            ${moment(values.date_birth).format('DD-MM-YYYY')}
          </td>
        </tr> 
        <tr>
          <td style='${tableLabelStyle}'>Accident date</td>
          <td style='${tableValueStyle}'>
            ${moment(values.date_accident).format('DD-MM-YYYY')}
          </td>
        </tr> 
        <tr>
          <td style='${tableLabelStyle}'>Location of accident</td>
          <td style='${tableValueStyle}'>${values.location_accident}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Accident description</td>
          <td style='${tableValueStyle}'>${values.description_accident}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Weather and road</td>
          <td style='${tableValueStyle}'>${values.description_accident}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Weather and road</td>
          <td style='${tableValueStyle}'>${values.description_accident}</td>
        </tr>
      </table>
      <h2 style='${h2Style}'>Injuries and Immediate Medical Attention</h2>
      <table style='${tableStyle}'>
        <tr>
          <td style='${tableLabelStyle}'>Describe injuries</td>
          <td style='${tableValueStyle}'>${values.injury_description}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Seek medical attention</td>
          <td style='${tableValueStyle}'>${values.medical_attention}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>First medical</td>
          <td style='${tableValueStyle}'>${values.first_medical}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Vehicle and property damage</td>
          <td style='${tableValueStyle}'>${values.damage_property}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Seat belt</td>
          <td style='${tableValueStyle}'>${values.seat_belt}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Damage description</td>
          <td style='${tableValueStyle}'>${values.damage_description}</td>
        </tr>
      </table>
      <h2 style='${h2Style}'>Insurance information of the client</h2>
      <table style='${tableStyle}'>
        <tr>
          <td style='${tableLabelStyle}'>Insurance provider</td>
          <td style='${tableValueStyle}'>${values.insurance_provider}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Policy number</td>
          <td style='${tableValueStyle}'>${values.policy_number}</td>
        </tr>
      </table>
      <h2 style='${h2Style}'>Other details</h2>
      <table style='${tableStyle}'>
        <tr>
          <td style='${tableLabelStyle}'>Insurance company name</td>
          <td style='${tableValueStyle}'>${values.policy_number}</td>
        </tr>
        <tr>
          <td style='${tableLabelStyle}'>Official report filled</td>
          <td style='${tableValueStyle}'>${values.accident_report}</td>
        </tr>
      </table>
    </div>`;
};
