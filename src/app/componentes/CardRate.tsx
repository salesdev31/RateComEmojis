type Props = {
    rate: number;
}

export const CardRate = ({rate}: Props) => {
    if(rate > 5) rate = 5;
    if(rate < 0) rate = 0;

    const tiposEmojis: any = ["😔", "🙂", "😄", "😀", "😁"];

    let rateInt = Math.floor(rate);
    let notaInt = rateInt;
    if(rateInt > 4) rateInt = 4;
    if(rateInt <= 0) rateInt = 0;
    
    const constAtualEmoji = tiposEmojis[rateInt];

    if(notaInt == 0){
        notaInt = 1;
    } 
    
    const stars = (constAtualEmoji).repeat(notaInt) + '😶'.repeat(5-notaInt);
    

    return(
        <div className="flex gap-3 p-5 bg-sky-900 rounded-md shadow-zinc-200 shadow-sm">
            <div className="">Nota: {notaInt} - </div>
            <div>{stars}</div>
        </div>
    );
}