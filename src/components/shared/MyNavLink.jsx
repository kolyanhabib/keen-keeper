import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-1 px-3 py-1.5 rounded-sm transition ${
          isActive
            ? "bg-[#244D3F] text-white font-semibold"
            : "text-[#64748B] hover:text-[#244D3F]"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
