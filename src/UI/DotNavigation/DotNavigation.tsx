import type { FC } from 'react'
import { DotNavigationProps } from './types'
import clsx from 'clsx'

const DotNavigation: FC<DotNavigationProps> = ({
	dots,
	currentDot,
	className,
}) => (
	<div className={clsx('flex gap-2 justify-center', className)}>
		{dots.map(dot => (
			<div
				key={dot}
				className={clsx(
					'h-1.5 rounded-full',
					currentDot === dot
						? 'bg-black w-1.5 animate-grow'
						: 'bg-grey-dot w-1.5'
				)}
			/>
		))}
	</div>
)

export default DotNavigation
