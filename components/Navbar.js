export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">NeuroXcel</a>
        <ul className="flex space-x-4">
          <li><a href="/assistants" className="text-gray-300 hover:text-white">Assistants</a></li>
          <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
          <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
}
