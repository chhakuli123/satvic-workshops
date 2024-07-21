import MobileWorkshopCard from './MobileWorkshopCard';
import WorkshopCard from './WorkshopsCard';
import { workshopsData } from './workshopsData';

const WorkshopCards = () => {
  return (
    <div className="relative top-0 z-40 mx-auto w-[92%] rounded-2xl bg-base-200 xl:-top-20 xl:w-[62%] xl:bg-white">
      <div className="grid grid-cols-1 gap-6 rounded-2xl">
        {workshopsData.map((workshop) => (
          <>
            <MobileWorkshopCard key={workshop.id} workshop={workshop} />
            <WorkshopCard key={workshop.id} workshop={workshop} />
          </>
        ))}
      </div>
    </div>
  );
};

export default WorkshopCards;
