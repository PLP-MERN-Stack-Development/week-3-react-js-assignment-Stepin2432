export default function Card({ title, content }) {
  return (
    <div className="border rounded shadow p-4 bg-white dark:bg-gray-800 dark:text-white">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
