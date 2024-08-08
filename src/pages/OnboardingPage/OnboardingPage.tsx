import { Image } from "@telegram-apps/telegram-ui";
// import i18next from "i18next";
import type { FC } from "react";
// import { useTranslation } from "react-i18next";
import ElsePeopleSvg from "@/assets/icons/ElsePeople.svg";
import { ButtonBase } from "@/UI/ButtonBase/ButtonBase";

export const OnboardingPage: FC = () => {
  // const { t } = useTranslation();
  // const changeLng = (lng: string) => {
  //   i18next.changeLanguage(lng, (err, t) => {
  //     if (err) return console.log("something went wrong loading", err);
  //     t("key");
  //   });
  // };
  return (
    <div className="bg-white h-full min-h-screen ">
      <div className="px-4 pt-[73px] flex flex-col justify-between min-h-screen">
        <div className="justify-start">
          <h1 className="text-title-1 font-bold text-black text-center mb-5">
            Else People
          </h1>
          <Image
            style={{ width: "146px", height: "146px", background: "white" }}
            alt="else icon"
            src={ElsePeopleSvg}
            className="m-auto"
            width="146px"
            height="146px"
          />
          <div className="text-center text-black text-normal mt-5">
            Быстрый поиск специалистов
          </div>
        </div>
        <div className="justify-self-end">
          <ButtonBase
            text="Далее"
            onClick={() => console.log("click")}
            className="w-full mb-9"
          />
        </div>
      </div>
    </div>
  );
};
