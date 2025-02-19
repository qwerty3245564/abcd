"use client";

type User = {
  name: string;
  email: string;
  number: string;
};

type Props = {
  users: User[];
};

export default function UserTable({ users }: Props) {
  return (
    <table className="w-3/4 mt-6 border-collapse border border-black">
      <thead>
        <tr className="bg-blue-800 text-white">
          <th className="border border-black p-2">Name</th>
          <th className="border border-black p-2">Email</th>
          <th className="border border-black p-2">Number</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} className="text-center border border-black">
            <td className="border border-black p-2">{user.name}</td>
            <td className="border border-black p-2">{user.email}</td>
            <td className="border border-black p-2">{user.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
