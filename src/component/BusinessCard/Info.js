import './Info.css';
export default function Info(){
    return(
        <div  className='info'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk9ZGDdNfbDMzn7bS7IU3I0ib_WgwqPPm6w&usqp=CAU" width='100%' alt="me"/>
            <h1 className='name'>Naveen Kumar A</h1>
            <h2 className='position'>Software Trainee</h2>
            <h3 className='company'>Tringapps</h3>
            <div className='buttons'>
                <button><nav className='email'></nav>E-mail</button>
                <button><nav className='linkedin'></nav>LinkedIn</button>
            </div>
        </div>
    );
}