export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <h1>Este es el Layout general de App</h1>
        {children}
      </body>
    </html>
  );
}
