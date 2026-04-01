import { Navbar } from "@/components/layout/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}
