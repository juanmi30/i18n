import React from "react";
import { FormattedDate, FormattedNumber } from "react-intl";

const Job = ({ offer, locale }) => {
  const formatSalary = (salary) => {
    if (locale.startsWith("es")) {
      return salary === 1 ? "1 millón" : `${salary} millones`;
    }
    return `${salary} million`;
  };

  return (
    <tr>
      <th scope="row">{offer.id}</th>
      <td>{offer.name}</td>
      <td>{offer.company}</td>
      <td>{formatSalary(offer.salary)}</td>
      <td>{offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={offer.views} />
      </td>
    </tr>
  );
};

export default Job;
