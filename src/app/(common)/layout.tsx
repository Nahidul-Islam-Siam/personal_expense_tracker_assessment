import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton/ScrollToTopButton";
import { NextUiProvider } from "@/lib/providers/NextUIProvider";
import ReduxProvider from "@/redux/ReduxProvider";

import { Toaster } from "sonner";

// export const metadata: Metadata = {
//   title: "ARC (Allied Restoration Contractors)",
//   description:
//     "Award Winning Service Allied Restoration Contractors, Repairs & Replacement",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NextUiProvider>
        <ReduxProvider>
          <>
            <div className=" flex flex-col max-w-[80w]">
              <Navbar />
              <main className="flex-grow mt-[96px]">{children}</main>
              <Footer />
            </div>
            <ScrollToTopButton />
            <Toaster />
          </>
        </ReduxProvider>
      </NextUiProvider>
    </div>
  );
}
