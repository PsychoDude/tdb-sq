import Link from 'next/link'
import { GrGithub } from 'react-icons/gr'
import { Button } from './ui/button'

export default function TopNav() {
	return (
		<div className='flex justify-between items-center'>
			<h1 className='text-2xl font-bold'>
				Santé Québec <sup className='text-neutral-800'>LOL</sup>
			</h1>

			<div className='flex flex-col gap-3 items-center'>
				<h2>Contribuer</h2>
				<Button
					variant={'ghostRounded'}
					size={'icon'}>
					<Link href='https://github.com/PsychoDude/tdb-sq'>
						<GrGithub size={32} />
					</Link>
				</Button>
			</div>
		</div>
	)
}
