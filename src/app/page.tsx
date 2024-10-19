import { CardRate } from "./componentes/CardRate";

export default function ratePage () {
  return(



    <div className="bg-black h-screen w-screen text-white flex flex-col items-center justify-center text-6xl transition-all duration-200">
      <CardRate rate={1}/>
    </div>
  )
}