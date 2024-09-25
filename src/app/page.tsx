import Placeholder from "@/assets/Placeholder.jpg"

export default function Home() {
  return (
    <>
      <header className="bg-red-700 fixed top-0 h-20 w-full flex flex-col justify-between">
        <div>
          <h1 className="text-center text-xl">Title</h1>
        </div>
        <div className="w-full bg-fuchsia-700 h-10 flex justify-start md:justify-center gap-2 overflow-x-auto px-2 items-end">
          <div className="flex flex-col text-center min-w-20 h-8 bg-yellow-500 mt-1 flex justify-end">
            Text
            <div className="w-full h-1 bg-yellow-700"></div>
          </div>
          <div className="flex flex-col text-center min-w-20 h-8 bg-yellow-500 mt-1 flex justify-end">
            Text
            <div className="w-full h-1 bg-yellow-700"></div>
          </div>
          <div className="flex flex-col text-center min-w-20 h-8 bg-yellow-500 mt-1 flex justify-end">
            Text
            <div className="w-full h-1 bg-yellow-700"></div>
          </div>
          <div className="flex flex-col text-center min-w-20 h-8 bg-yellow-500 mt-1 flex justify-end">
            Text
            <div className="w-full h-1 bg-yellow-700"></div>
          </div>
          <div className="flex flex-col text-center min-w-20 h-8 bg-yellow-500 mt-1 flex justify-end">
            Text
            <div className="w-full h-1 bg-yellow-700"></div>
          </div>
          <div className="flex flex-col text-center min-w-20 h-8 bg-yellow-500 mt-1 flex justify-end">
            Text
            <div className="w-full h-1 bg-yellow-700"></div>
          </div>
          <div className="flex flex-col text-center min-w-20 h-8 bg-yellow-500 mt-1 flex justify-end">
            Text
            <div className="w-full h-1 bg-yellow-700"></div>
          </div>
        </div>
      </header>
      <main className="bg-blue-700 w-full mt-20 mb-16 rounded-t-lg flex justify-center items-center">
        <div className="flex justify-evenly items-start flex-wrap gap-5">
          <div className="border-solid border-2 border-black h-40 md:h-80 w-32 md:w-60 flex flex-col items-center bg-cyan-700">
              <img className="w-11/12 rounded-md border-solid border-2 border-black" src={Placeholder.src}></img>
              <span className="text-sm md:text-lg">Description</span>
          </div>
          <div className="border-solid border-2 border-black h-40 md:h-80 w-32 md:w-60 flex flex-col items-center bg-cyan-700">
              <img className="w-11/12 rounded-md border-solid border-2 border-black" src={Placeholder.src}></img>
              <span className="text-sm md:text-lg">Description</span>
          </div>
          <div className="border-solid border-2 border-black h-40 md:h-80 w-32 md:w-60 flex flex-col items-center bg-cyan-700">
              <img className="w-11/12 rounded-md border-solid border-2 border-black" src={Placeholder.src}></img>
              <span className="text-sm md:text-lg">Description</span>
          </div>
          <div className="border-solid border-2 border-black h-40 md:h-80 w-32 md:w-60 flex flex-col items-center bg-cyan-700">
              <img className="w-11/12 rounded-md border-solid border-2 border-black" src={Placeholder.src}></img>
              <span className="text-sm md:text-lg">Description</span>
          </div>
          <div className="border-solid border-2 border-black h-40 md:h-80 w-32 md:w-60 flex flex-col items-center bg-cyan-700">
              <img className="w-11/12 rounded-md border-solid border-2 border-black" src={Placeholder.src}></img>
              <span className="text-sm md:text-lg">Description</span>
          </div>
          <div className="border-solid border-2 border-black h-40 md:h-80 w-32 md:w-60 flex flex-col items-center bg-cyan-700">
              <img className="w-11/12 rounded-md border-solid border-2 border-black" src={Placeholder.src}></img>
              <span className="text-sm md:text-lg">Description</span>
          </div>
          <div className="border-solid border-2 border-black h-40 md:h-80 w-32 md:w-60 flex flex-col items-center bg-cyan-700">
              <img className="w-11/12 rounded-md border-solid border-2 border-black" src={Placeholder.src}></img>
              <span className="text-sm md:text-lg">Description</span>
          </div>
        </div>
      </main>
      <footer className="bg-green-700 fixed bottom-0 w-full h-16 rounded-t-lg"></footer>
    </>
  );
}