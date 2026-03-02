


function App() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-3 h-screen w-full p-4 bg-[url('assets/background.png')] bg-cover bg-center overflow-hidden box-border overflow-y-auto">
      
        {/* 1 */}
        <div className="md:col-span-2 md:row-span-5 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-[7px_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center text-white text-2xl font-semibold">
          1
        </div>
      
        {/* 3 */}
        <div className="md:col-start-5 md:row-start-1 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-[7px_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center text-white font-semibold">
          3
        </div>
      
        {/* 4 */}
        <div className="md:col-start-5 md:row-start-2 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-[7px_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center text-white font-semibold">
          4
        </div>
      
        {/* 5 */}
        <div className="md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-2 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-[7px_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center text-white font-semibold">
          5
        </div>
      
        {/* 6 */}
        <div className="md:col-start-3 md:row-start-3 md:col-span-3 md:row-span-3 bg-[#00000038] backdrop-blur-xl border-2 border-white/10 rounded-2xl p-6 shadow-[7px_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center text-white font-semibold">
          6
        </div>
      
      </div>
  </>
  )
}

export default App
