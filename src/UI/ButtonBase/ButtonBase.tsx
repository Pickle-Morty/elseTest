import type { FC } from 'react'
import { ButtonBaseProps } from './types'
import clsx from 'clsx'
import { ArrowIcon } from '@/assets/icons'
import { Link } from '../Link/Link'

export const ButtonBase: FC<ButtonBaseProps> = ({
	children,
	className,
	onClick,
	icon,
	isLink,
}) => {
	const commonClasses = clsx(
		className,
		'bg-blue w-full font-sf-pro-text font-medium rounded-3xl py-3 flex text-white justify-center items-end gap-1.5 text-[1rem] leading-[1rem] font-medium'
	)
	const Arrow = (
		<div className='w-3.5 h-3.5 flex items-center justify-center'>
			<ArrowIcon />
		</div>
	)
	return isLink ? (
		<Link {...isLink} className={commonClasses}>
			{children}
			{icon === 'arrow' && Arrow}
		</Link>
	) : (
		<button onClick={onClick} className={commonClasses}>
			{children}
			{icon === 'arrow' && Arrow}
		</button>
	)
}
