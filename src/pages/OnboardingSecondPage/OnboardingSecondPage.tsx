import { ReactNode, useMemo, useState, type FC } from "react";
import { ButtonBase } from "@/UI/ButtonBase/ButtonBase";
import DotNavigation from "@/UI/DotNavigation/DotNavigation";
// import { useTranslation } from "react-i18next";  
import UserImg from "@/assets/image/user.jpg";
import { InputBase } from "@/UI/InputBase/InputBase";
import { InputLink } from "@/UI/InputLink/InputLink";
import { User, useInitData } from "@telegram-apps/sdk-react";



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

export const OnboardingSecondPage: FC = () => {
//   const { t } = useTranslation();

  const initData = useInitData()

  const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
      return initData && initData.user ? getUserRows(initData.user) : undefined
  }, [initData])
  const [input, setInput] = useState(`${userRows?.[4]?.value || ''} ${userRows?.[3]?.value || ''}`);
  return (
    <div className="bg-white-bg h-full min-h-screen pb-5">
      <div className="px-4 pt-[21px] flex flex-col gap-[80px] bg-light-blue justify-between min-h-screen">
        <div className="justify-start text-black font-sf-pro">
          <img
            className="w-[87px] h-[87px] rounded-full mb-2.5"
            src={UserImg}
            alt="user"
          />
          <h1 className="font-sf-pro font-semibold  text-title-2 mb-[3px]">
            Личные данные
          </h1>
          <div className="text-gray text-custom-text-xs">
            из вашего профиля в телеграм
          </div>
          <form action="" className="mt-3 flex flex-col gap-[6px] ">
            <InputBase
              placeholder="Имя и фамилия"
              value={input}
              label="Имя и фамилия"
              className="mb-[16px]"
              onChange={(e) => setInput(e.target.value)}
            />
            <InputLink
              value={"Москва"}
              label="Город"
            />
          </form>
        </div>
        <div className="justify-self-end">
          <div className="text-center text-black font-sf-pro">
            <div className="font-semibold text-subtitle mb-[4px]">Проверка данных</div>
            <div className="font-custom-base tracking-custom-base mb-[25px]">
              Проверьте личные данные <br /> из телеграма или внесите изменения
            </div>
          </div>
          <DotNavigation
            className="mb-4.5"
            currentDot={2}
            dots={[1, 2, 3, 4]}
          />
          <ButtonBase
            icon="arrow"
            isLink={{ to: "/onboardingThird" }}
            className="mb-9"
          >
            Сохранить
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
