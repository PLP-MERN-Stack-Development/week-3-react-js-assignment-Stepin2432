export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      © {new Date().getFullYear()} Task App. All rights reserved.
    </footer>
  );
}