export const metadata = {
  title: "Learn NextJs",
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
        <header style={{ 
          backgroundColor: "#007bff", 
          color: "white",
          textAlign: "center",
          padding: "10px"
        }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{ 
          backgroundColor: "yellow",
          textAlign: "center",
          padding: "10px"
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
