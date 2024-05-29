import { AchievementType } from "../../types/AchievementType";

const Achievement = ({ total, name }: AchievementType) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-[35px] text-yellow">{total}+</h2>
        <p className="text-white">{name}</p>
      </div>
    </>
  );
};

export default Achievement;
