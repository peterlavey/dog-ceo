const Breed = ({key, name, srcImage})=> {
    return (
        <div key={key}>
            <p>{name}</p>
            <img src={srcImage} alt={name}/>
        </div>
    )
}

export default Breed;