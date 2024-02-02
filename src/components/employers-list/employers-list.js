import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

const EmployersList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    return (
      <EmployersListItem
        increase={item.increase}
        name={item.name}
        salary={item.salary}
        key={item.id}
        rise={item.rise}
        onDelete={() => onDelete(item.id)}
        onToggleProp={(e) =>
          onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
