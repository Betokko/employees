import './styles/App.css'
import Info from './Info';
import SearchPanel from './SearchPanel';
import Filter from './Filter';
import EmployeesList from './EmployeesList';
import EmployeesAddForm from './EmployeesAddForm';

function App() {
  return (
    <div className='App'>
      <Info />

      <div className="SearchPanel">
        <SearchPanel/>
        <Filter/> 
      </div>
      <EmployeesList/>
      <EmployeesAddForm/>
    </div>
  );
}

export default App;
