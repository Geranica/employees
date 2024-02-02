import "./employers-list-item.css";

const EmployersListItem = ({salary, name, onDelete, onToggleProp, increase, rise}) => {
  
  let classNames = "list-group-item d-flex justify-content-between";
  if (rise) {
    classNames += " like";
  }
  if (increase) {
    classNames += " increase";
  }

  return (
    <li className={classNames}>
      <span data-toggle='rise' onClick={onToggleProp} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"} // "Это значение будет показано по умолчанию"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          data-toggle='increase'
          onClick={onToggleProp}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployersListItem;
