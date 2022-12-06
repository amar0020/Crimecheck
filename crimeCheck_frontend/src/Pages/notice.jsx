import { useEffect, useRef, useState } from "react"

export const Notice = ()=>{
    const ref = useRef()

    const [data,setData] = useState([])

    const fetchAllNotice = ()=>{
        fetch("http://localhost:8000/all").then((r)=>r.json())
        .then((r)=>{
            console.log(r)
            setData(r.data)
        })
    }

    const handleSubmit = ()=>{
        console.log(ref.current.value)

        const token = localStorage.getItem("token") || ""

        if(ref.current.value.length>100 && token){
            const body = JSON.stringify({
                notice:ref.current.value
            })
            fetch("http://localhost:8000/post",{
                method:"POST",
                body:body,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${token}`
                }

            }).then((r)=>r.json())
            .then((r)=>{
                console.log(r)
                fetchAllNotice()
            })
        }
    }

    useEffect(()=>{
        fetchAllNotice()
    },[data])
    return <div>
        <h2>Notice Board</h2>
        <div className="noticearea">
            <p>Submit a Notice:</p>
            <div>
                <textarea ref={ref} name="" id="" cols="30" rows="3"></textarea>
            </div>
            <button onClick={handleSubmit} className="post">Post</button>
        </div>
    </div>
}