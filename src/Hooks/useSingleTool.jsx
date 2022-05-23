// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const useSingleTool = () => {
//     const { id } = useParams();
//     const [tool, setTool] = useState();
//     useEffect(() => {
//         fetch(`http://localhost:5000/product/${id}`)
//             .then(req => req.json())
//             .then(data => setTool(data))
//     }, [id])
//     return [tool, setTool]
// };

// export default useSingleTool;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleTool = () => {
    const [tool, setTool] = useState([]);
    const [isReload, setIsreload] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setTool(data)
                setIsreload(data)
            });
    }, [isReload])
    return [tool, setTool];
}
export default useSingleTool;