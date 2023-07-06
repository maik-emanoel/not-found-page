// eslint-disable-next-line react/prop-types
export default function Button( {text, children} ) {
    return (
        <button className="py-3 px-6 uppercase font-medium rounded-full bg-[#151557] transition-all duration-300 ease-in-out hover:bg-[#212187] hover:drop-shadow-[0px_0px_60px_#212187] active:scale-95">
            {text ? text : children}
        </button>
    )
}