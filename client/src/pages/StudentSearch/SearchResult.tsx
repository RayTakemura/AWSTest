import { useQuery } from "@apollo/client";
import { SEARCH_STUDENT } from "./../../utils/queries";

interface Props {
  studentID: string;
}

const SearchResult: React.FC<Props> = ({ studentID }) => {
  const { loading, error, data } = useQuery(SEARCH_STUDENT, {
    variables: { studentId: studentID },
  });
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
        <>
          <tr>
            <td className="text-center">{data.student.id}</td>
            <td className="text-center">{data.student.firstName}</td>
            <td className="text-center">{data.student.lastName}</td>
            <td className="text-center">{data.student.age}</td>
          </tr>
        </>
      </tbody>
    </table>
  );
};

export default SearchResult;
