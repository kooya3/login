import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: 'lissalogin',
    description: 'A challenge to create a functional login/sign-up form'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
    )
}