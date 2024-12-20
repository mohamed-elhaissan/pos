import { createContext } from 'react';
import Panies from '../Context/PaniesContext.jsx';
export default function Product2({ type, img, prix, title }) {
  const produit = {
    productType : type,
    productPrix : prix,
    productImg : img,
    productTitle : title
  }
  const {ProductsPanies,setProductsPanies} = createContext(Panies)

  return (
    <div className="inline-block mb-5">
      <div
      className="bg-white  flex flex-col gap-5 p-5 rounded-xl "
      style={{
        boxShadow: "0px 10px 30px rgba(0,0,0,.1)",
      }}
    >
      <div className="flex gap-4">
        <img src={img} alt="" />
        <span>
          <p className="opacity-50">{type}</p>
          <h2 className="text-xl  my-1">{title}</h2>
          <p className="text-2xl font-semibold">{prix} Dh</p>
        </span>
      </div>

      <div className="w-[80%]">
        <h2 className="text-lg">Size</h2>
        <span className="flex  flex-wrap gap-1">
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            XS
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            S
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            M
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            L
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            XL
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            XXL
          </span>
        </span>
      </div>
      <div className="w-[80%]">
        <h2 className="text-lg">Couleur</h2>
        <span className="flex  flex-wrap gap-1">
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            Noir
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            Blanc
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-[#0D0072] rounded-full"></div>
            Bleu foncé
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-[#965E47] rounded-full"></div>
            Marron
          </span>
          <span className="flex cursor-pointer items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-[#007F1B] rounded-full"></div>
            Vert
          </span>
        </span>
      </div>
      <hr></hr>
      <button className="bg-primary text-white py-3 rounded-lg" onClick={()=>{setProductsPanies([...ProductsPanies,...produit])}}>
        Ajouter au panier
      </button>
    </div>
    </div>
  );
}
