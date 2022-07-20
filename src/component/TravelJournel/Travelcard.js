export default function Travelcard(props){
    return(
        <div className='travelLog'>
            <img className='locationImage' src={props.detail.imageUrl} alt='locationImage'/>
            <div className='location'>
                <div className='locationLink'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3nY2pzdNjNxCpl819ivYuWXQkLA9sCgCLsw&usqp=CAU' alt="icons" width="7%"/>
                    <div className='placeName'>{props.detail.location}</div>
                    <div><a href={props.detail.googleMapsUrl}>view on google Maps</a></div>
                </div>
                <div className='loactionDetails'>
                    <div className='locationName'><h2>{props.detail.title}</h2></div>
                    <div className='locationTiming'><h3>{props.detail.startDate}  {props.detail.endDate}</h3></div>
                    <div className='locationDescription'>{props.detail.description}</div>
                </div>
            </div>
        </div>
    );
}