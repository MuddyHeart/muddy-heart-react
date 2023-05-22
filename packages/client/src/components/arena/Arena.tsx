export default function Arena() {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <div className='w-[330px] h-[280px] mt-28 relative'>
                <div className="absolute">
                    {/* Player 1 */}
                    <div className="w-14 h-14 rounded-full bg-gray-400" />
                </div>
                <div className="absolute right-0">
                    {/* Player 2 */}
                    <div className="w-14 h-14 rounded-full bg-gray-400" />
                </div>
                <div className="absolute left-0 bottom-0">
                    {/* Player 3 */}
                    <div className="w-14 h-14 rounded-full bg-gray-400" />
                </div>
                <div className="absolute right-0 bottom-0">
                    {/* Player 4 */}
                    <div className="w-14 h-14 rounded-full bg-gray-400" />
                </div>
            </div>
        </div>
    )
}
