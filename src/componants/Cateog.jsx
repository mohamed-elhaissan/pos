import Product1 from "./product1.jsx";
import Product2 from "./product2.jsx";
import prod1 from "../assets/products/prod1.svg";
import prod2 from "../assets/products/prod2.svg";
import prod3 from "../assets/products/prod3.svg";
import prod4 from "../assets/products/prod4.svg";
import { IoBagHandle } from "react-icons/io5";
import { useState } from "react";
import codePar from "../assets/codePar.svg";
import saveMoney from "../assets/save-money.svg";
import cedit from "../assets/credit.svg";
import { IoCloseOutline } from "react-icons/io5";

export default function Catego() {
  const [isVisible, setIsVisible] = useState(false);
  const  handleShowPanies = ()=>{setIsVisible(!isVisible)}
  return (
    <div className="p-2 w-full">
      <div className="flex justify-between px-4">
        <h2 className="font-bold text-2xl mb-4 ">Catégories</h2>
        <IoBagHandle className="text-3xl cursor-pointer" onClick={handleShowPanies} />
      </div>
      <div className="flex gap-2 mb-4">
        <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">
          Tous
        </span>
        <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">
          Chemises
        </span>
        <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">
          Pantalons
        </span>
        <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">
          Chaussures
        </span>
        <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">
          Polos
        </span>
        <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">
          Parfums
        </span>
        <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">
          Accessoires
        </span>
      </div>
      <h2 className="font-bold text-2xl mb-4">Liste des Pantalons</h2>
      <div
        className=" w-full "
        style={{
          columnCount: "3",
          columnGap: "10px",
        }}
      >
        <Product1
          img={prod1}
          title="Pantalon en Jean Léger"
          type="Pantalons"
          prix={359}
        />
        <Product2
          img={prod4}
          title="Pantalon en Jean Léger"
          type="Pantalons"
          prix={359}
        />
        <Product2
          img={prod2}
          title="Pantalon en Jean Léger"
          type="Pantalons"
          prix={359}
        />
        <Product1
          img={prod1}
          title="Pantalon en Jean Léger"
          type="Pantalons"
          prix={359}
        />
        <Product2
          img={prod3}
          title="Pantalon en Jean Léger"
          type="Pantalons"
          prix={359}
        />
      </div>
      <div
        className="fixed right-0 top-0 flex flex-col justify-between bg-white h-full p-5"
        style={{
          boxShadow: "0px 10px 30px rgba(0,0,0,.1)",
          transition: "all .5s cubic-bezier(0.16, 1, 0.3, 1)",
          right: isVisible ? "0%" : "-100%",
        }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Panier</h2>
          <IoCloseOutline className="text-3xl cursor-pointer" onClick={handleShowPanies} />
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
            <p className="border mb-2 flex justify-between items-center p-2 rounded-lg">
              Réduction
            </p>
          </div>
          <div className="flex  gap-4">
            <div className="border cursor-pointer flex flex-col text-sm  rounded-xl px-5">
              <img src={saveMoney} alt="" />
              Espèce
            </div>
            <div className="border cursor-pointer flex flex-col text-sm  rounded-xl px-5">
              <img src={cedit} alt="" />
              Carte
            </div>
            <button className="bg-primary w-36 rounded-lg text-white">
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
