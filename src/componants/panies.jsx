import codePar from "../assets/codePar.svg";
import saveMoney from "../assets/save-money.svg";
import cedit from "../assets/credit.svg";
import { IoCloseOutline } from "react-icons/io5";
export default function Panies() {
  return (
    <div className="fixed right-0 top-0 flex flex-col justify-between bg-white h-full p-5"
    style={{boxShadow: "0px 10px 30px rgba(0,0,0,.1)"}}>
        <div>

      <h2 className="text-3xl font-bold">Panier</h2>
      <IoCloseOutline/>
        </div>
      <div className="flex flex-col text-center">
        <img src={codePar} alt="" />
        <h2 className="font-semibold">Votre panier est vide</h2>
        <p>Veuillez ajouter des produits en scannant le codebar</p>
      </div>
      <div>
        <div className="border mb-2 flex justify-between items-center pl-2 rounded-lg">
          <p>Espece</p>
          <p className="bg-[#F2F2F2] p-2 rounded-s-xl">00,00</p>
        </div>
        <div>
          <p className="border mb-2 flex justify-between items-center p-2 rounded-lg">Réduction</p>
        </div>
        <div className='flex  gap-4'>
          <div className="border cursor-pointer flex flex-col text-sm  rounded-xl px-5">
            <img src={saveMoney} alt="" />
            Espèce
          </div>
          <div className="border cursor-pointer flex flex-col text-sm  rounded-xl px-5">
            <img src={cedit} alt="" />
            Carte   
          </div>
          <button className="bg-primary w-36 rounded-lg text-white">Valider</button>
        </div>
      </div>
    </div>
  );
}
