import EmployeesListItem from '../components/EmployeesListItem'
import './styles/EmployeesList.css'

function EmployeesList() {
    return (
        <ul className="EmployeesList list-group">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}
export default EmployeesList;