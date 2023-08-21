import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "./../utils/queries";

const StudentList = () => {
  const { loading, error, data } = useQuery(GET_STUDENTS);
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
        {data.students.map(
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
            <tr key={id}>
              <td className="text-center">{id}</td>
              <td className="text-center">{firstName}</td>
              <td className="text-center">{lastName}</td>
              <td className="text-center">{age}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
  // return <h1> Home</h1>;
};
export default StudentList;
