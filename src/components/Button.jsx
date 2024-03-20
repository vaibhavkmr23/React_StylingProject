export default function Button({children,...props}){
  return(
    <button className="py-4 px-8 font-semibold rounded uppercase text-stone-900 bg-amber-400 hover:bg-amber-600" {...props}>{children}</button>
  )
}

