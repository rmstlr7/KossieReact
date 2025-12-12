const Card = ({ title }) => {


    return(
       <div className="card mb-3">

{console.log('id, title, contants : ',  title)}
            { <div className="card-body">
                {title}
            </div>}
        </div>
    )
}
export default Card;