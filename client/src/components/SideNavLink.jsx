import { NavLink as RouterNavLink } from "react-router-dom";

const SidebarNavLink = ({ to, children, exact = 0 }) => {
  return (
    <RouterNavLink
      to={to}
      exact={exact}
      className={({ isActive }) =>
        isActive
          ? "bg-primary-light text-text-primary rounded py-2 md:py-4 px-2 md:px-4 block font-semibold text-xs md:text-lg lg:text-xl"
          : "text-white py-2 md:py-4 px-2 md:px-4 block text-xs md:text-lg lg:text-xl"
      }
    >
      {children}
    </RouterNavLink>
  );
};

export default SidebarNavLink;
