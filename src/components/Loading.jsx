const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full py-10">
      <div className="w-12 h-12 rounded-full animate-spin bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
        <div className="bg-gray-900 w-full h-full rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
