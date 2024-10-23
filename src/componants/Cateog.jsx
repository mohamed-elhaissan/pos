import Products from "./products.jsx";
import prod1 from '../assets/products/prod1.svg';

export default function Catego(){
    return (
        <div className="p-2">
            <h2 className="font-bold text-2xl mb-4">Catégories</h2>
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
            <div className="flex flex-wrap gap-6">
                <Products img={prod1} title='Pantalon en Jean Léger' type='Pantalons' prix={359}/>
                <Products img={prod1} title='Pantalon en Jean Léger' type='Pantalons' prix={359}/>
            </div>

        </div>
    )
}