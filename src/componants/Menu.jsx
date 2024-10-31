import prod1 from '../../public/svg/home.svg'
import prod2 from '../../public/svg/products.svg'
import prod3 from '../../public/svg/clock.svg'
import prod4 from '../../public/svg/wallet.svg'
import prod5 from '../../public/svg/setting.svg'
import logout from '../../public/svg/logout.svg'
export default function Menu(){
    return(
        <div className="w-[10%] bg-white h-[100vh] sticky top-0 flex flex-col items-center justify-between py-9">
            <div  className='flex flex-col items-center gap-6' >
                <h1 className='w-10 h-10  rounded-full bg-primary mb-9'></h1>
                <div className='flex flex-col items-center '>
                    <a href="#" className='flex flex-col items-center hover:bg-primary hover:text mb-1  p-3 rounded-lg'>
                        <img src={prod1} alt=""/>
                        Accueil
                    </a>
                    <a href="#" className='flex flex-col items-center bg-primary text-white p-3 rounded-lg mb-1'>
                        <img src={prod2} alt=""/>
                        Produits
                    </a>
                    <a href="#" className='flex flex-col items-center hover:bg-primary hover:text-white p-3 rounded-lg mb-1'>
                        <img src={prod3} alt=""/>
                        Historique
                    </a>
                    <a href="#" className='flex flex-col items-center hover:bg-primary hover:text-white p-3 rounded-lg mb-1'>
                        <img src={prod4} alt=""/>
                        Caisse
                    </a>
                    <a href="#" className='flex flex-col items-center hover:bg-primary hover:text-white p-3 rounded-lg mb-1'>
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