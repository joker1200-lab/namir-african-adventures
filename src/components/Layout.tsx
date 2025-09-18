import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[140px] md:pt-[120px]">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;