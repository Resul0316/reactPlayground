import React, { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
        .catch ((err) => {
            console.log('fetching Data error', err)
        })
    }, [])
    console.log(data, 'data')
    const mappedData = data.map((el) => { return <ul><li key={el.id}>{el.title}</li></ul> })
  return (
    <div className="mt-5">
        {mappedData}
    </div>
  )
}

export default FetchData