import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">

            <Link
              to="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Products
            </Link>
            
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
     
      </header>
    </>
  );
};

export default Navbar;