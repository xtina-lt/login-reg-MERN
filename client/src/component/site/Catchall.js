import React from 'react'

const Catchall = ({setTitle}) => {

    setTitle('Ooops')
    
    return (
        <>
            <div>
                <span className="accent">
                    Page not found.....
                <br/>
                <h1>
                    Here's a cupcake though!
                </h1>
                </span>
                <br/>
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/319/cupcake_1f9c1.png" alt="cupcake"/>
            </div>
            <div>
                <span className="accent">
                    Incase nobody told you today...
                    <br/>
                    <h1>
                        You're AWESOME!!
                    </h1>
                </span>
                <br/>
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/microsoft/319/cupcake_1f9c1.png" alt="cupcake"/>
            </div>
        </>
    )
}

export default Catchall