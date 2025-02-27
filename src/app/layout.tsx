import type { Metadata } from "next";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
	console.log(messages);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
