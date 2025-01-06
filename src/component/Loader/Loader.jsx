const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="border-b-4 border-r-4 border-0 border-blue-500 border-dashed rounded-full w-16 h-16 animate-spin duration-500"></div>
      <p className="text-gray-200 mt-4 text-lg">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
