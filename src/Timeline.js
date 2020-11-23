import React,{useState, useEffect} from 'react'

const Timeline = () => {
    const start = 1605916800
    const end = 1621468800

    const [current,setCurrent] = useState(new Date())

    useEffect(() => 
    setInterval(() => setCurrent(new Date()),1000)
    )

    return (
        <div>

          {/* Time passed {( (current - new Date(start * 1000))/60000/60).toFixed(2)}hrs
           <br/>*/}
           Seconds passed: {Math.floor(( (current - new Date(start * 1000))/1000))}
           {/*<br/>
           Time to pass: {( (new Date(end * 1000 - current))/60000/60).toFixed(2)}hrs*/}
           <br/>
           Seconds to pass: {Math.floor(( (new Date(end * 1000 - current))/1000))}
        </div>
    )
}

export default Timeline