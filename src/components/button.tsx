export default function mainButton () {
  return (
    <div>
      <button className="p-[3px] relative w-full sm:w-auto min-w-[200px]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-4 sm:px-8 sm:py-4 bg-gray-50 rounded-[6px] font-medium text-base sm:text-lg relative group duration-300 text-black hover:text-white hover:bg-transparent shadow-lg hover:shadow-xl w-full text-center cursor-pointer transition-all">
          Browse Products
        </div>
      </button>
    </div>
  )
}
