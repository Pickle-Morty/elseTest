import { useState, type FC } from "react";
import ElsePeopleSvg from "@/assets/icons/ElsePeople.svg";
import { ButtonBase } from "@/UI/ButtonBase/ButtonBase";
import DotNavigation from "@/UI/DotNavigation/DotNavigation";
import { Link } from "@/UI/Link/Link";

export const OnboardingPage: FC = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="bg-white h-full min-h-screen pb-5">
      <div className="px-4 pt-[73px] flex flex-col justify-between min-h-screen">
        <div className="justify-start">
          <h1 className="text-title-1 font-bold text-black text-center mb-5">
            Else People
          </h1>
          <img
            alt="else icon"
            src={ElsePeopleSvg}
            className="m-auto w-[146px] h-[146px]"
          />
          <div className="text-center text-black text-normal mt-5">
            Быстрый поиск специалистов
          </div>
        </div>
        <div className="justify-self-end">
          <div className="flex justify-center mb-[18px]">
            <DotNavigation value={page} />
          </div>
          <Link to="/onbording2">
            <ButtonBase
              text="Далее"
              onClick={() => setPage(page + 1)}
              className="w-full mb-9"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
