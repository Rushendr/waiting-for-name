import { Zap } from "lucide-react";
import React from "react";
import { AdBanner } from "./AdBanner";

const NAV_LINKS = [
  { label: "Home", href: "https://hubcity.net" },
  { label: "Other Tools", href: "https://hubcity.net/businesstools.html" },
  { label: "Crypto Tools", href: "https://hubcity.net/cryptotoo;s.html" },
  { label: "Contact Us", href: "https://hubcity.net/contacthubcity.html" },
];

const BOTTOM_AD = {
  imageUrl: "https://adsection.tigoy.com/002.png",
  linkUrl: "https://adsection.tigoy.com/ad002.html",
  width: 960,
  height: 200,
  alt: "Advertisement",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      {/* Bottom Ad Banner — above footer message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <AdBanner
          imageUrl={BOTTOM_AD.imageUrl}
          linkUrl={BOTTOM_AD.linkUrl}
          width={BOTTOM_AD.width}
          height={BOTTOM_AD.height}
          alt={BOTTOM_AD.alt}
          position="bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Footer nav + copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-primary" />
            <span>
              © {year} InvoiceFast Tool. All data is processed locally in your
              browser.
            </span>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-4 text-sm"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`footer.nav_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
                {idx < NAV_LINKS.length - 1 && (
                  <span className="text-border select-none">·</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Branding */}
        <div className="mt-4 pt-4 border-t border-border text-center text-xs text-muted-foreground">
          © 2025 TIGOY.com | Huncity.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
