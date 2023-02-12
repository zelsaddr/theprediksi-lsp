import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const menu = [
    {
      name: "Artikel",
      url: "/artikel",
    },
    {
      name: "Acara",
      url: "/event",
    },
    {
      name: "Galeri Foto",
      url: "/galeri",
    },
    {
      name: "Mitra",
      url: "/partner-kami",
    },
  ];

  const location = useLocation().pathname;

  return (
    <>
      <aside className="p-4 flex flex-col w-2/12 h-screen sticky top-0">
        <div className="mx-auto mt-10">
          <img src="/ThePrediksiLogo.webp" alt="Logo" width="150" height="150" className="rounded-xl" />
        </div>
        <ul className="flex flex-col space-y-6 mt-10 items-center">
          {menu.map((menu, i) => (
            <li key={i}>
              <Link className={`font-semibold border-sky-60 px-4 py-1 rounded-lg ${location === menu.url ? `bg-slate-500` : ``}`} to={menu.url}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center mt-80">&copy; 2023 Izzeldin Addarda</p>
      </aside>
    </>
  );
};

export default Navbar;
