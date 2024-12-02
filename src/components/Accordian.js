import MenuCard from "./MenuCard";

const Accordian = ({ data, isOpen, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
  };

  return (
    <div className="px-3 md:px-3">
      <div
        className="flex justify-between cursor-pointer py-4 px-4 my-2 bg-white"
        onClick={toggleAccordion}
      >
        <h3 className="text-2xl font-bold">
          {data.title} ({data.itemCards.length})
        </h3>
        <div>
          {isOpen ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </div>
      </div>

      {isOpen && (
        <div>
          {data.itemCards.map((item) => (
            <MenuCard key={item.card.info.id} itemsData={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordian;
