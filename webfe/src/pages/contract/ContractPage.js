import Header from "../../components/header/home/Header"
import Main from "../../components/main/contract/Main"
import Search from "../../components/search/Search"
import React, { useEffect, useState } from "react"
import { getPropertyController } from "../../controller/property/PropertyController"
const ContractPage = () => {

    const [options, setOption] = useState([])


    useEffect(() => {
        getPropertyController()
            .then((res) => {
                setOption(res.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <React.Fragment>
            <Header />
            <Search />
            <Main options={options} />
        </React.Fragment>
    )
}
export default ContractPage