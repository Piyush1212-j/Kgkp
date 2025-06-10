import React from "react";
import { Link, useLocation } from "react-router-dom";
import CommonImage from "@/assets/images/comman-main.png";

const HeroSectionMain = ({ title, background, breadcrumbs }) => {
  const location = useLocation();

  const crumbs = React.useMemo(() => {
    if (breadcrumbs && breadcrumbs.length) return breadcrumbs;
    const segments = location.pathname.split("/").filter(Boolean);
    return segments.length ? ["Home", ...segments] : ["Home"];
  }, [breadcrumbs, location.pathname]);

  const buildLink = (index) => {
    const pathSegments = crumbs.slice(1, index + 1);
    return "/" + pathSegments.join("/");
  };

  return (
    <section
      className="hero-section relative sm:h-[65vh] h-[45vh] bg-cover bg-top bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${background || CommonImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center text-white px-4 py-6">
        <h1 className="text-2xl lg:text-4xl font-normal mb-2 drop-shadow-lg">{title}</h1>
        <nav className="text-sm lg:text-lg flex justify-center flex-wrap gap-2 drop-shadow">
          {crumbs.map((crumb, i) => {
            const label =
              crumb === "Home"
                ? "Home"
                : crumb.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

            const isLast = i === crumbs.length - 1;

            return (
              <span key={crumb} className="flex items-center gap-2">
                {isLast ? (
                  <span>{label}</span>
                ) : (
                  <>
                    <Link to={i === 0 ? "/" : buildLink(i)} className="underline hover:text-gray-300">
                      {label}
                    </Link>
                    <span>/</span>
                  </>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default HeroSectionMain;
