export default function CornerSmall() {
    return (
        <>
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-black/30 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-black/30 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 left-0 w-6 h-6 border-b-2 border-l-2 border-black/30 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 right-0 w-6 h-6 border-b-2 border-r-2 border-black/30 rounded-br-lg"></div>

        </>
    )
}