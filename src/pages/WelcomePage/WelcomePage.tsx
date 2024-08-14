import { type FC } from 'react'
import { ButtonBase } from '@/UI/ButtonBase/ButtonBase'
import DotNavigation from '@/UI/DotNavigation/DotNavigation'
import { EnFlag, LogoIcon, RuFlag } from '@/assets/icons'
import { SelectBase } from '@/UI/SelectBase/SelectBase'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '@/utils/changeLanguage'

export const WelcomePage: FC = () => {
	const { t } = useTranslation()

	return (
		<div className='bg-white-bg h-full min-h-screen pb-5'>
			<div className='px-4 pt-[58px] flex flex-col gap-[85px] bg-light-blue justify-between min-h-screen'>
				<div className='justify-start text-black font-sf-pro text-center'>
					<h1 className='text-title-1 font-medium mb-4'>Else People</h1>
					<LogoIcon className='w-[146px] h-[146px] mx-auto mb-8' />
					<p className='font-normal text-[1.0625rem] leading-[1.16875rem]'>
						Быстрый поиск специалистов
					</p>
				</div>
				<div className='justify-self-end'>
					<SelectBase
						label={t('language')}
						options={[
							{ id: 'ru', name: 'Русский', icon: RuFlag },
							{ id: 'en', name: 'English', icon: EnFlag },
						]}
						defaultValue='ru'
						mainClassName='mb-7 mx-auto w-[250px]'
						onChange={value => changeLanguage(value as string)}
					/>
					<DotNavigation
						className='mb-4.5'
						currentDot={1}
						dots={[1, 2, 3, 4]}
					/>
					<ButtonBase
						icon='arrow'
						isLink={{ to: '/onboardingSecond' }}
						className='mb-9'
					>
						Далее
					</ButtonBase>
				</div>
			</div>
		</div>
	)
}
