const CategoryButton = ({ category, onClick }) => {
    return (
      <button
        onClick={() => onClick(category)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        {category}
      </button>
    );
  };

  export default CategoryButton
  