export default function Testimonal(props){
    return(
        <section className="testimonals">
            <section className="client-feedbacks">
                <img className="client-img" src={require(`../images/${props.item.pic}`)} alt="client" />
                <p className="feedback">{props.item.testimonal}</p>
                <p className="client-name">{props.item.clientName}</p>
                <p className="designation">{props.item.designation}</p>
            </section>
        </section>
    )
}