import "./styles/main.css";
import { MagnifyingGlassPlus } from "phosphor-react"
import logo from "./assets/logo-nlw-esports.svg"

function App() {

  return(
    <div>
      <h1 className="w-full text-slate-400">
      BUAHAHAHAHAHAHAH
      </h1>

      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">\
        <img src={logo}></img>

        <h1 className="text-3xl text-white font-black mt-20">
          Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">
                DUO
            </span> está aqui!!
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image 1.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>

              <span className="text-zinc-300 tex-sm block">
                4 anúncios
              </span>

            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image 2.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                DOTA 2
              </strong>

              <span className="text-zinc-300 tex-sm block">
                4 anúncios
              </span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image 5.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Apex Legends
              </strong>

              <span className="text-zinc-300 tex-sm block">
                4 anúncios
              </span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image 3.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Counter Strike
              </strong>

              <span className="text-zinc-300 tex-sm block">
                4 anúncios
              </span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image 6.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Fortnite
              </strong>

              <span className="text-zinc-300 tex-sm block">
                4 anúncios
              </span>
            </div>
          </a>

          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="image 7.png" alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                World of Warcraft
              </strong>

              <span className="text-zinc-300 tex-sm block">
                4 anúncios
              </span>
            </div>
          </a>
        </div>

        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
          <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-black block">
                Não encontrou o seu DUO?
              </strong>

              <span className="text-zinc-400 block">
                Publique um anúncio para encontrar novos players!
              </span>
            </div>

            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex  items-center gap-3">
              <MagnifyingGlassPlus size={ 24 }/>
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default App
