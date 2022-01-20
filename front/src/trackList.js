const TrackList = (props)=>{

    const listItems = props.tracks.map(item=>(
        <li key={item.id}>{item.name} {item.id}</li>
    ))

    return(
        <ul>
            {listItems}
        </ul>
    )
}
export default TrackList;