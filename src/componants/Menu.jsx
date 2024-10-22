import prod1 from '../assets/svg/home.svg'
import prod2 from '../assets/svg/products.svg'
import prod3 from '../assets/svg/clock.svg'
import prod4 from '../assets/svg/wallet.svg'
import prod5 from '../assets/svg/setting.svg'
import logout from '../assets/svg/logout.svg'
export default function Menu(){
    return(
        <div className="w-[10%] bg-white h-[100vh] flex flex-col items-center justify-between py-9">
            <div  className='flex flex-col items-center gap-6' >
                <h1 className='w-10 h-10  rounded-full bg-primary mb-9'></h1>
                <div className='flex flex-col items-center '>
                    <a href="#" className='flex flex-col items-center p-3 rounded-lg'>
                        <img src={prod1} alt=""/>
                        Accueil
                    </a>
                    <a href="#" className='flex flex-col items-center p-3 rounded-lg'>
                        <img src={prod2} alt=""/>
                        Produits
                    </a>
                    <a href="#" className='flex flex-col items-center p-3 rounded-lg'>
                        <img src={prod3} alt=""/>
                        Historique
                    </a>
                    <a href="#" className='flex flex-col items-center p-3 rounded-lg'>
                        <img src={prod4} alt=""/>
                        Caisse
                    </a>
                    <a href="#" className='flex flex-col items-center p-3 rounded-lg'>
                        <img src={prod5} alt=""/>
                        Parametres
                    </a>
                </div>
            </div>
            <div>
                <a href="#">
                    <img src={logout} alt=""/>
                    Log out
                </a>
            </div>
        </div>
    )
}