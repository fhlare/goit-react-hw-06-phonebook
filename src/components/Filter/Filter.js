import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const filterValue = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        <b>Find contact by name</b>
      </p>
      <input
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filterValue}
        onChange={(e)=> dispatch(setFilter(e.target.value))}
      />
    </div>
  )
}