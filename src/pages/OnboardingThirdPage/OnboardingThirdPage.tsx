import { type FC } from "react";
import { ButtonBase } from "@/UI/ButtonBase/ButtonBase";
import DotNavigation from "@/UI/DotNavigation/DotNavigation";
// import { useTranslation } from "react-i18next";
// import { changeLanguage } from "@/utils/changeLanguage";
import cardExample from '@/assets/image/CardExample.png'

export const OnboardingThirdPage: FC = () => {
//   const { t } = useTranslation();

  return (
    <div className="bg-white-bg h-full min-h-screen pb-5">
      <div className="px-4 pt-[18px] flex flex-col gap-[20px] bg-light-blue justify-between min-h-screen">
        <div className="justify-start text-black flex  justify-center font-sf-pro text-center">
          <img className="block w-[219px] h-[355px]" src={cardExample} alt="" />
        </div>
        <div className="justify-self-end">
          <div className="text-center text-black font-sf-pro">
            <div className="font-semibold text-subtitle mb-[4px]">
              Быстро и просто
            </div>
            <div className="font-custom-base sf-pro-text tracking-custom-base  mb-[25px]">
              Else People — это удобный сервис <br /> для для поиска помощников по
              дому: няня, <br /> домработница, водитель, охранник, повар
            </div>
          </div>
          <DotNavigation
            className="mb-4.5"
            currentDot={3}
            dots={[1, 2, 3, 4]}
          />
          <ButtonBase
            icon="arrow"
            isLink={{ to: "/onbording2" }}
            className="mb-9"
          >
            Далее
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
