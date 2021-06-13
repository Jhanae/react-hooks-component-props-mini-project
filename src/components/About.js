function About(props){
    return(
        <aside>
            {props.image ? <img src={props.image} alt="blog logo"></img> : <img src={"https://via.placeholder.com/215"} alt="blog logo"></img>}
            <p>{props.about}</p>
        </aside>
    )
}
 export default About;