import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployersList = ({ data,  onDelete}) => {
  const elements = data.map((item) => {
    return (
      <EmployersListItem
        increase={item.increase}
        name={item.name}
        salary={item.salary}
        key={item.id}
        onDelete = {() => onDelete(item.id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
