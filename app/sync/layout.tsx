import { Nav } from "../_component/Nav";
import { SyncLayout } from "./_layout/SyncLayout";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <Nav />
         <SyncLayout>{children}</SyncLayout>
      </>
   );
}
