import React from 'react';
import '../style/home-page.scss';
import Card from './Card';

function APIPage() {
    let[loading, setLoading] = React.useState(true);
    let[pressed, setPressed] = React.useState(false);
    let[data, setData] = React.useState();

    React.useEffect(() => {
        
        if(pressed){
            queryAPI();
        }

    },[pressed])

    const queryAPI = async () =>{
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const json = await response.json();
        console.log(json);  
        setData(json.message);
        setLoading(false);
    }

    return (
        <>
        <div>
            <input type="button" onClick={()=>{setPressed(true)}} value="press"></input>
        </div>
        <div className="home-page">
            
            {
                (!loading) ? (
                    <Card name="Dog!" text="yes its a dog..." url={data}/>
                ):(
                    <>Loading....</>
                )
            }

        </div>
        </>
    );
}

export default APIPage;
