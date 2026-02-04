import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#projects", label: "Projects" },
    { href: "#story", label: "Story" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="mt-auto border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Navigation Links */}
          <nav>
            <ul className="flex items-center gap-8 md:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} Klien. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
