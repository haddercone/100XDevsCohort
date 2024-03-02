import React from "react";
export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div>
        <div className="p-2 text-center border-b">
            <p>Get 20% off</p>
        </div>
        {children}
      </div>
  );
}
