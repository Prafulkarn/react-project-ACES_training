function Navbar(){
    return (
<div>
  {/* Navbar */}
  <nav className="bg-gray-500 fixed top-0 left-0 w-full z-50">
    <div className="flex justify-between items-center h-14 md:h-16 px-5 sm:px-10 lg:px-20 text-white">
      {/* Logo */}
      <a href="#" className="text-xl lg:text-2xl flex items-center gap-2 font-serif">
        <i className="fa-solid fa-shop text-green-700" />
        <span>LoGo</span>
      </a>
      {/* Navbar Links (Desktop) */}
      <ul className="hidden md:flex gap-6 text-base">
        <li><a href="/#" className="hover:underline">Home</a></li>
        <li><a href="/shop" className="hover:underline">Shop</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* User Icon */}
        <i className="fa-solid fa-circle-user text-xl lg:text-2xl hover:cursor-pointer" />
        {/* Desktop Button */}
        <button className="hidden md:block border rounded-md bg-blue-500 text-sm px-3 py-1">
          Get started
        </button>
        {/* Mobile Hamburger Menu */}
        <button className="md:hidden text-xl" onclick="toggleMenu()">
          <i className="fa-solid fa-bars" />
        </button>
      </div>
    </div>
    {/* Mobile Dropdown Menu */}
    <div id="mobileMenu" className="hidden md:hidden bg-gray-800 text-white p-3 space-y-2">
      <a href="/" className="block hover:bg-gray-700 py-2 px-3 rounded">Home</a>
      <a href="/shop" className="block hover:bg-gray-700 py-2 px-3 rounded">Shop</a>
      <a href="/about" className="block hover:bg-gray-700 py-2 px-3 rounded">About</a>
      <a href="/contact" className="block hover:bg-gray-700 py-2 px-3 rounded">Contact</a>
    </div>
  </nav>
  {/* Spacer so content is not hidden behind fixed navbar */}
  <div className="pt-14 md:pt-16" />
</div>


    )
}
export default Navbar