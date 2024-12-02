const CategoryList = ({ list }) => {
  return (
    <div>
      {console.log(list[0].card.info.name)}
      <p className="font-light text-sm">
        {list.map((ls) => (
          <h6>{ls.card.info.name}</h6>
        ))}
      </p>
    </div>
  );
};

export default CategoryList;
