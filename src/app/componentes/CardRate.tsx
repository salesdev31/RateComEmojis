type Props = {
    rate: number;
}

export const CardRate = ({rate}: Props) => {
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;

    const rateInt = Math.floor(rate);
    const stars = '😁'.repeat(rateInt) + '😶'.repeat(5-rateInt);

    return(
        <div className="flex gap-3 p-5 bg-sky-900 rounded-md shadow-zinc-200 shadow-sm">
            <div className="">Nota: {rateInt} - </div>
            <div>{stars}</div>
        </div>
    );
}