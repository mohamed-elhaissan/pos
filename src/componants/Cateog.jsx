import Product1 from "./product1.jsx";
import Product2 from "./product2.jsx";
import prod1 from '../assets/products/prod1.svg';
import prod2 from '../assets/products/prod2.svg';
import prod3 from '../assets/products/prod3.svg';
import prod4 from '../assets/products/prod4.svg';
import { IoBagHandle } from "react-icons/io5";
import Panies from './panies.jsx'

export default function Catego(){
    return (
        <div className="p-2 w-full">
            <div className="flex justify-between px-4">
            <h2 className="font-bold text-2xl mb-4 ">Catégories</h2>
            <IoBagHandle className="text-3xl cursor-pointer"/>
            </div>
            <div className="flex gap-2 mb-4">
                <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">Tous</span>
                <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">Chemises</span>
                <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">Pantalons</span>
                <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">Chaussures</span>
                <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">Polos</span>
                <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">Parfums</span>
                <span className="bg-white cursor-pointer px-4 py-2 rounded-2xl shadow-sm">Accessoires</span>
            </div>
            <h2 className="font-bold text-2xl mb-4">Liste des Pantalons</h2>
            <div className=" w-full " style={{
                columnCount : '3',
                columnGap : '10px',
            }}>
                <Product1 img={prod1} title='Pantalon en Jean Léger' type='Pantalons' prix={359}/>
                <Product2 img={prod4} title='Pantalon en Jean Léger' type='Pantalons' prix={359}/>
                <Product2 img={prod2} title='Pantalon en Jean Léger' type='Pantalons' prix={359}/>
                <Product1 img={prod1} title='Pantalon en Jean Léger' type='Pantalons' prix={359}/>
                <Product2 img={prod3} title='Pantalon en Jean Léger' type='Pantalons' prix={359}/>
            </div>
            <Panies/>

        </div>
    )
}