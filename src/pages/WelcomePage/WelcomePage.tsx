import { type FC } from 'react'
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase'
import DotNavigation from '@/UI/DotNavigation/DotNavigation'
import { LogoIcon } from '@/assets/icons'

export const WelcomePage: FC = () => (
	<div className='bg-white h-full min-h-screen pb-5'>
		<div className='px-4 pt-[73px] flex flex-col justify-between gap-40 min-h-screen'>
			<div className='justify-start text-black font-sf-pro text-center'>
				<h1 className='text-title-1 font-medium mb-4'>Else People</h1>
				<LogoIcon className='w-[146px] h-[146px] mx-auto mb-8' />
				<p className='font-normal text-[1.0625rem] leading-[1.16875rem]'>
					Быстрый поиск специалистов
				</p>
			</div>
			<div className='justify-self-end'>
				<DotNavigation className='mb-4.5' currentDot={1} dots={[1, 2, 3, 4]} />
				<ButtonBase
					icon='arrow'
					isLink={{ to: '/onbording2' }}
					className='mb-9'
				>
					Далее
				</ButtonBase>
			</div>
		</div>
	</div>
)
