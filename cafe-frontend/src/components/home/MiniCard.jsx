const MiniCard = ({title, icon, number, footerNum}) => {
  return (
    <div className='bg-retroCard border border-retroBorder py-5 px-5 rounded-lg w-[50%] hover:bg-retroHover transition-all duration-300'>
        <div className='flex items-start justify-between'>
            <h1 className='text-retroPrimary text-lg font-semibold tracking-wide'>{title}</h1>
            <button className={`${title === "Total Earnings" ? "bg-retroGreen" : "bg-gradient-to-r from-retroOrange to-retroYellow"} p-3 rounded-lg text-retroBg text-2xl`}>{icon}</button>
        </div>
        <div>
            <h1 className='text-retroOrange text-4xl font-bold mt-5'>{
              title === "Total Earnings" ? `₹${number}` : number}</h1>
            <h1 className='text-retroPrimary text-lg mt-2'><span className='text-retroGreen'>{footerNum}%</span> than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard