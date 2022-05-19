import EmployeesListItem from "../components/EmployeesListItem";
import "./styles/EmployeesList.css";

function EmployeesList({ data, onDelete, onToggleIncrease, onToggleRise }) {
  const element = data.map((item) => {
    const { id, ...itemElement } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemElement}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
      />
    );
  });
  return <ul className="EmployeesList list-group">{element}</ul>;
}
export default EmployeesList;
