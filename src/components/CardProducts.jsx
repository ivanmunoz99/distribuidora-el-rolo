export function CardProducts ({info}){
    return <li>
        <img src={info.poster} alt={info.title} />
        <div>
        {info.title}
        </div>
        </li>
}