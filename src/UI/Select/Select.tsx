import { FC} from "react";

interface OptionType {
  value: string | number;
  label: string;
}

interface SelectCommonProps {
  bottomLine?: boolean;
  selectStyle?: string;
  optionStyle?: string;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  data: OptionType[];
}

const SelectCommon: FC<SelectCommonProps> = () => {


  return (
    // <div>
    //   <label
    //     htmlFor="HeadlineAct"
    //     className="block text-sm font-medium text-gray-900"
    //   >
    //     Headliner
    //   </label>

    //   <select
    //     name="HeadlineAct"
    //     id="HeadlineAct"
    //     className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    //   >
    //     <option value="BG">Русский</option>
    //     <option value="EC">Englihs</option>
    //   </select>
    // </div>
    <div>
  <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Headliner </label>

  <div className="relative mt-1.5">
    <input
      type="text"
      list="HeadlineActArtist"
      id="HeadlineAct"
      className="w-full rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
      placeholder="Please select"
    />

    <span className="absolute inset-y-0 end-0 flex w-8 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
        />
      </svg>
    </span>
  </div>

  <datalist id="HeadlineActArtist">
    <option className="min-w-[212px]" value="JM">John </option>
    <option value="SRV">Stevie Ray Vaughn</option>
    <option value="JH">Jimi Hendrix</option>
    <option value="BBK">B.B King</option>
    <option value="AK">Albert King</option>
    <option value="BG">Buddy Guy</option>
    <option value="EC">Eric Clapton</option>
  </datalist>
</div>
  );
};

export default SelectCommon;
