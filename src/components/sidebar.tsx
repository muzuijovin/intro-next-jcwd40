export function SidebarSection() {
  interface NavMenus {
    label: string;
    tittle: string;
    url: string;
    img: string;
    href?:string;
  }
  const navMenus: NavMenus[] = [
    {
      label: "dashboard",
      tittle: "Dashboard",
      url: "/admin/book-management",
      img: "/dashboard-icon.svg",
    },
    {
      label: "book management",
      tittle: "Book Management",
      url: "/admin/book-management",
      img: "/bookmanagement-icon.svg",
      href:'/admin/book-management'
    },
    {
      label: "borrowing transaction",
      tittle: "Borrowing Transaction",
      url: "/admin/book-management",
      img: "/borrowing transaction-icon.svg",
    },
    {
      label: "employee management",
      tittle: "Employee Management",
      url: "/admin/book-management",
      img: "/employee management-icon.svg",
    },
  ];
  
  return(
    <>
      {/* SECTION HEADER */}
      <header className="flex flex-col gap-0 mt-5 justify-start pl-3 pb-5">
        <h1 className="text-neutral-50 font-bold text-2xl font-headline cursor-pointer">
          RuangBaca
        </h1>
        <p className="text-neutral-200 cursor-pointer font-normal text-sm font-body">
          Library Admin
        </p>
      </header>

      {/* SECTION NAVIGATIONS */}
      <div className="pb-61 pl-3 pr-3">
        {navMenus.map((menu) => {
          return (
            <div className="flex gap-4 mb-2 h-8 items-center pl-2 rounded-sm hover:bg-blue-600">
              <div className="cursor-pointer">
                <img src={menu?.img} alt="dashboard" />
              </div>
              <a href={menu?.href}>
                <h1 className="text-neutral-200 cursor-pointer font-body font-medium text-sm">
                  {menu?.tittle}
                </h1>
              </a>
            </div>
          );
        })}
      </div>

      <div className="pl-3 pr-3">
        <div className="flex gap-3 mb-2 h-8 items-center pl-2 rounded-sm hover:bg-primary-400">
          <div className="cursor-pointer">
            <img src="/settings-icon.svg" alt="settings" />
          </div>
          <h1 className="text-neutral-200 cursor-pointer font-body font-medium text-sm ">
            Settings
          </h1>
        </div>
        <div className="flex gap-3 h-8 items-center pl-2 rounded-sm hover:bg-primary-400">
          <div className="cursor-pointer">
            <img src="/logout-icon.svg" alt="logout" />
          </div>
          <h1 className="text-neutral-200 cursor-pointer font-body font-medium text-sm">
           <a href="/admin/login">Logout</a>
          </h1>
        </div>
      </div>
    </>
  )
}