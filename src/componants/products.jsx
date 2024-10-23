export default function Products({ type, img, prix, title }) {
  return (
    <div
      className="bg-white flex flex-col gap-5 p-5 rounded-sm "
      style={{
        boxShadow: "0px 10px 30px rgba(0,0,0,.1",
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
      <div>
        <h2 className="text-lg">Couleur</h2>
        <span className="flex flex-wrap gap-1">
          <span className="flex items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-black rounded-full">
            
            </div>
            Noir
          </span>
          <span className="flex items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-white rounded-full">
            
            </div>
            Blanc
          </span>
          <span className="flex items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-[#0D0072] rounded-full">
            
            </div>
            Bleu foncé
          </span>
          <span className="flex items-center gap-1 px-4 rounded-full py-1 bg-[#F2F2F2]">
            <div className="w-4 h-4 bg-[#965E47] rounded-full">
            
            </div>
            Marron
          </span>
        </span>
      </div>
    </div>
  );
}
