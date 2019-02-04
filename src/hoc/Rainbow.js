import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colorList = ['red','blue','green','yellow','orange','pink','brown']
    const color = colorList[Math.floor(Math.random() * 6)]
    return (props) => {
        return(

            <div className={`${color}-text`}>
                <WrappedComponent {...props} />
            </div>
        )
        
    }
    
}

export default Rainbow