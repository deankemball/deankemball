import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="min-h-screen w-screen bg-white flex-col flex justify-between">
        <div className="flex-col space-y-2 absolute left-8 top-6">
          <Header />
        </div>
        <main>{children}</main>
        <div className="flex-col space-y-2 absolute right-8 bottom-6">
          <Footer />
        </div>
      </div>
    </>
  );
}
