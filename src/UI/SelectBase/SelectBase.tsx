import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState, type FC } from 'react'
import { SelectBaseProps } from './types'
import { ArrowIcon } from '@/assets/icons'
import clsx from 'clsx'

export const SelectBase: FC<SelectBaseProps> = ({
	label,
	mainClassName,
	options,
	onChange,
	...props
}) => {
	const [value, setValue] = useState<string | number | null>(null)
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div
			className={clsx(
				mainClassName,
				'flex flex-col text-black font-sf-pro font-medium'
			)}
		>
			{label && (
				<label className='mb-1 text-[0.9375rem] leading-[1.125rem]'>
					{label}
				</label>
			)}
			<Select
				classes={{
					root: '!rounded-xl bg-white',
				}}
				className='[&_fieldset]:!border-none'
				onChange={(event: SelectChangeEvent<string | number>) => {
					setValue(event.target.value)
					onChange && onChange(event.target.value)
				}}
				onClose={() => setIsOpen(false)}
				onOpen={() => setIsOpen(true)}
				MenuProps={{
					classes: {
						paper: '!rounded-xl mt-2',
						list: '!py-0',
					},
				}}
				inputProps={{
					className:
						'!text-[1.0625rem] !px-3 !text-black !leading-[1.16875rem] !flex !items-center !h-[46px] !p-0 !font-sf-pro',
				}}
				IconComponent={() => (
					<div
						className={clsx(
							'min-w-4 h-4 mr-3 flex items-center justify-center',
							isOpen ? 'rotate-[-90deg]' : 'rotate-90'
						)}
					>
						<ArrowIcon />
					</div>
				)}
				{...props}
			>
				{options.map(option => (
					<MenuItem
						className='!min-h-10 !px-2.5 !py-0 !font-sf-pro !text-[1.0625rem] !text-black !leading-[1.16875rem]'
						value={option.id}
					>
						{option.name}
					</MenuItem>
				))}
			</Select>
		</div>
	)
}
