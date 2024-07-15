import type { Metadata } from 'next'
import './globals.css'

import TopNav from '../components/TopNav'

export const metadata: Metadata = {
	title: 'Santé Québec LOL',
	description: 'Les vraies statistiques de la santé au Québec',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fr'>
			<head>
				<link
					rel='icon'
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤮</text></svg>"
				/>
			</head>
			<body
				className={
					'bg-neutral-900 text-white xl:container mx-auto p-4'
				}>
				<TopNav />
				{children}
			</body>
		</html>
	)
}
