import { withErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { ErrorBoundary } from "../common";
import { IconSearch } from "../icon";

const Search = () => {
  const { register, handleSubmit } = useForm();
  const handleSearch = (value) => console.log(value);
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(handleSearch)}
      className="flex items-center rounded-lg border-2 border-c6 pl-2 text-c3 transition-all focus-within:border-blue-400 lg:pl-4"
    >
      <input
        type="text"
        placeholder="Search..."
        {...register("search")}
        className="w-full bg-transparent pr-2 text-sm lg:text-base"
      />
      <button className="py-2 px-3 text-c4">
        <IconSearch />
      </button>
    </form>
  );
};

export default withErrorBoundary(Search, {
  FallbackComponent: ErrorBoundary,
});
