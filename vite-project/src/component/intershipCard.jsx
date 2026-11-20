export default function InterShipCard({title,company,location,positions,buttonText}){

    return(<>
    <h2>title:{title}</h2>
    <h3>Organization: {company}</h3>
    <p>location:{location}</p>
    <p>Position{positions}</p>
    <button>applay now <a>{buttonText}</a></button>

    
    </>)
}
