import "./globals.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "Signup / Login Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}