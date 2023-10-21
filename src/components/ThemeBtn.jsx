import useTheme from "../context/theme";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeBtn = () => {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.target.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="cursor-pointer">
            <input
                className="hidden"
                type="checkbox"
                checked={themeMode === "dark"}
                onChange={onChangeBtn}
            />
            {themeMode === "dark" ? <BsFillMoonFill className="text-2xl" /> : <BsFillSunFill className="text-2xl text-orange-500" />}
        </label>
    );
};

export default ThemeBtn;
