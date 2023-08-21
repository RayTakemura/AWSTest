import { useQuery } from "@apollo/client";
import { SEARCH_STUDENT } from "./../../utils/queries";

const SearchResult = () => {
  const { loading, error, data } = useQuery(SEARCH_STUDENT);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <table className="w-1/2">
      <thead>
        <tr>
          <th>id</th>
          <th>first name</th>
          <th>last name</th>
          <th>age</th>
        </tr>
      </thead>

      <tbody>
        {data.student.map(
          ({
            id,
            firstName,
            lastName,
            age,
          }: {
            id: string;
            firstName: string;
            lastName: string;
            age: number;
          }) => (
            <>
              <tr key={id}>
                <td className="text-center">{id}</td>
                <td className="text-center">{firstName}</td>
                <td className="text-center">{lastName}</td>
                <td className="text-center">{age}</td>
              </tr>
            </>
          )
        )}
      </tbody>
    </table>
  );
};

export default SearchResult;
