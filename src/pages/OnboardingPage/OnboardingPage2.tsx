import { ReactNode, useMemo, FC } from 'react'
import { useInitData, User } from '@telegram-apps/sdk-react'
import DotNavigation from '@/UI/DotNavigation/DotNavigation'
import { TextField } from '@mui/material';
import { SelectBase } from '@/UI/SelectBase/SelectBase';


export type DisplayDataRow = { title: string } & (
	| { type: 'link'; value?: string }
	| { value: ReactNode }
)

function getUserRows(user: User): DisplayDataRow[] {
	return [
		{ title: 'id', value: user.id.toString() },
		{ title: 'username', value: user.username },
		{ title: 'photo_url', value: user.photoUrl },
		{ title: 'last_name', value: user.lastName },
		{ title: 'first_name', value: user.firstName },
		{ title: 'is_bot', value: user.isBot },
		{ title: 'is_premium', value: user.isPremium },
		{ title: 'language_code', value: user.languageCode },
		{ title: 'allows_to_write_to_pm', value: user.allowsWriteToPm },
		{ title: 'added_to_attachment_menu', value: user.addedToAttachmentMenu },
	]
}

export const OnboardingPage2: FC = () => {
	const initData = useInitData()

	const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
		return initData && initData.user ? getUserRows(initData.user) : undefined
	}, [initData])

	return (
		<div className='bg-white h-full min-h-screen pb-5'>
			<div className='px-4 pt-[16px] flex flex-col justify-between min-h-screen'>
				<div className='justify-start'>
					{/* <img
            className="w-[87px] h-[87px] rounded-full"
            src={userPhotoUrl || userImg}
            alt="user"
          /> */}
		  			
					<h1 className='text-black font-bold text-3xl'>Личные данные</h1>
					<div className='text-gray text-normal mb-[15px]'>
						из вашего профиля в телеграм
					</div>
					<form action='#' className='mb-0 max-w-md space-y-4'>
						<label
							htmlFor='UserName'
							className='block text-black w-full overflow-hidden rounded-md shadow px-3 py-2 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
						>
							<span className='text-xs text-gray font-medium text-gray-700'>
								Имя и фамилия
							</span>
							<input
								type='text'
								id='UserName'
								value={`${userRows?.[3]?.value || ''} ${
									userRows?.[4]?.value || ''
								}`}
								placeholder='Имя и фамилия'
								className='mt-1 w-full text-base border-none p-0 focus:border-transparent focus:outline-none focus:ring-0'
							/>
						</label>
						<TextField label="asd" variant='filled' />
						<SelectBase options={[]}/>
						<label
							htmlFor='UserCity'
							className='block text-black overflow-hidden rounded-md shadow px-3 py-2 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
						>
							<span className='text-xs text-gray font-medium text-gray-700'>
								Город
							</span>
							<input
								type='text'
								id='UserCity'
								value={'Москва'}
								placeholder='Город'
								className='mt-1 w-full text-base border-none p-0 focus:border-transparent focus:outline-none focus:ring-0'
							/>
						</label>
					</form>
				</div>
				<div className='justify-self-end'>
					<div className='text-center text-black text-normal mt-5 mb-[28px]'>
						<div className='font-bold mb-[5px]'>Проверка данных</div>
						<p>Проверьте личные данные из телеграма или внесите изменения</p>
					</div>
					<div className='flex justify-center mb-[18px]'>
					<DotNavigation className='mb-4.5' currentDot={2} dots={[1, 2, 3, 4]} />
					
					</div>

				</div>
			</div>
		</div>
	)
}
