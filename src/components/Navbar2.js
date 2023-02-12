import { useLocation, Link } from "react-router-dom";

const Navbar2 = () => {
  const menu2 = [
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Profil",
      url: "/profile",
    },
    {
      name: "Visi & Misi",
      url: "/Visi-misi",
    },
    {
      name: "Produk",
      url: "/produk",
    },
    {
      name: "Kontak Kami",
      url: "/kontak-kami",
    },
    {
      name: "Tentang Kami",
      url: "/tentang",
    },
  ];

  const location = useLocation().pathname;

  return (
    <>
      <nav className="mt-8 py-4 relative">
        <ul className="flex bg-slate-600 rounded-md p-2 justify-around overflow-x-auto space-x-4 overflow-hidden">
          {menu2.map((menu, i) => (
            <li key={i}>
              <Link className={`font-semibold hover:text-rose-500 ${location.toString() === menu.url ? `text-rose-600` : ``}`} to={menu.url}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar2;
