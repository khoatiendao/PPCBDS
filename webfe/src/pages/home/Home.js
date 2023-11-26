import Header from "../../components/header/home/Header";
import React, { useEffect, useState } from "react";
import Search from "../../components/search/Search";
import Main from "../../components/main/home/Main";
import { getContractController } from "../../controller/contract/ContractController";
import { toast } from "react-toastify";


const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getContractController()
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                toast.error("Loi roi")
            })
    }, [])


    return (
        <React.Fragment>
            <Header />
            <Search />
            <Main data={data} />
        </React.Fragment>
    )
}

export default Home 