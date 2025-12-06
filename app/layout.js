export const metadata = {
  title: "UNCODE AI",
  description: "AI Engine for UNCODE Universe"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#050510",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif"
        }}
      >
        {children}
      </body>
    </html>
  );
}
