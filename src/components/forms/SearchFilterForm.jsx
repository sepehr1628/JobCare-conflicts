import FilterListItem from "@/features/shop/FilterListItem";

function SearchFilterForm({ filterItems, isLoading }) {
  // const [brands, setBrands] = useState([]);
  // const [categories, setCategories] = useState([]);

  const keys = Object.keys(filterItems);
  const values = Object.values(filterItems);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.checked);
      }}
    >
      <div>
        <p className="mt-4 mb-2 font-medium">{keys[0]}</p>
        <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-4">
          {values[0].map((el, i) => (
            <FilterListItem key={i} inputLabel={el} />
          ))}
        </ul>
      </div>
      <div>
        <p className="mt-4 mb-2 font-medium">{keys[1]}</p>
        <ul className="[&>li]:flex flex xlg:flex-col gap-4 xlg:gap-1 flex-wrap [&>li]:gap-4">
          {values[1].map((el, i) => (
            <FilterListItem key={i} inputLabel={el} />
          ))}
        </ul>
      </div>

      <div>
        <p className="mt-4 mb-2 font-medium">Price Range</p>
        <input
          type="range"
          name="price-range"
          className="w-full outline-none h-[0.35rem]"
          min="0"
          max="5000"
        />
      </div>
      <div className="my-4 [&>button]:border [&>button]:border-slate-500 [&>button]:border-solid [&>button]:px-4 [&>button]:py-1 [&>button]:rounded-full flex justify-evenly">
        <button type="reset">Delete</button>
        <button type="submit" disabled={isLoading}>
          Filter
        </button>
      </div>
    </form>
  );
}

export default SearchFilterForm;
