import { Metadata } from "next";
import { ErrorWrapper } from "./error-wrapper";

export const metadata:Metadata = {
  title: {
    default: "Next.js App",
    template: "%s | Codevolution",
  },
  description: "General description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#007bff",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <p>Header</p>
        </header>
        <ErrorWrapper>{children}</ErrorWrapper>
        <footer
          style={{
            backgroundColor: "yellow",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
