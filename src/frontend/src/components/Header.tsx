import { Download, Menu, X, Zap } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onDownload?: () => void;
  isDownloading?: boolean;
}

const NAV_LINKS = [
  { label: "Home", href: "https://hubcity.net" },
  { label: "Other Tools", href: "https://hubcity.net/businesstools.html" },
  { label: "Crypto Tools", href: "https://hubcity.net/cryptotoo;s.html" },
  { label: "Contact Us", href: "https://hubcity.net/contacthubcity.html" },
];

export function Header({ onDownload, isDownloading = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
              <Zap className="w-4 h-4" />
            </div>
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              Invoice<span className="text-primary">Fast</span>
            </span>
          </div>

          {/* Desktop nav links */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Site navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`header.nav_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Download CTA + mobile menu toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onDownload}
              disabled={isDownloading}
              data-ocid="header.download_button"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 active:scale-95 transition-smooth disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
            >
              <Download className="w-4 h-4" />
              {isDownloading ? "Generating…" : "Download PDF"}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              data-ocid="header.mobile_menu_toggle"
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {mobileMenuOpen && (
        <div
          data-ocid="header.mobile_menu"
          className="md:hidden border-t border-border bg-card px-4 py-3 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid={`header.mobile_nav_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              className="block py-2 px-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-border">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onDownload?.();
              }}
              disabled={isDownloading}
              data-ocid="header.mobile_download_button"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-smooth disabled:opacity-60"
            >
              <Download className="w-4 h-4" />
              {isDownloading ? "Generating…" : "Download PDF"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
