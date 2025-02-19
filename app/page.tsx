import Navbar from "../components/Navbar";

export default function Resources() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Resources & References</h2>
        <ul className="list-disc list-inside">
          <li><a href="#" className="text-blue-600 hover:underline">Resource 1</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Resource 2</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Resource 3</a></li>
        </ul>
      </main>
    </>
  );
}
