import classes from "./Search.module.css";
export default function SearchBar({ handleChange, handleSubmit, search }) {
  return (
    <div className={classes.SearchMainContainer}>
      <h1>
        Find your <strong>meal</strong> with ours <strong>APP</strong>
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          Type food name or ingredients separated by comma
        </label>
        <input
          type="text"
          name="search"
          placeholder="chicken, onion, carrots"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
