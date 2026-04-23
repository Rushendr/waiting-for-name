import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
  onDownload?: () => void;
  isDownloading?: boolean;
}

/**
 * Layout — wraps pages with Header + Footer.
 * The main content area uses flex-1 to push the footer to the bottom.
 */
export function Layout({ children, onDownload, isDownloading }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onDownload={onDownload} isDownloading={isDownloading} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
