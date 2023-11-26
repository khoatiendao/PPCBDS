import { useEffect, useState } from "react"
import { getPropertyController } from "../../../controller/property/PropertyController"
import "./Main.scss"
import { addContractController } from "../../../controller/contract/ContractController"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import React from "react"
const Main = (props) => {

    const onFinish = {
        "customer_name": "Hieududu",
        "yearofbirth": "14/07/2002",
        "ssn": "0901923123123",
        "customer_address": "Phan Van Han",
        "mobile": "091230192031",
        "property_id": "656231bde618ffafeb499e29",
        "price": 901293012312,
        "deposit": 12319023910,
        "remain": 123123,
        "status": "0"
    }

    const [form, setForm] = useState(onFinish)
    const { options } = props
    const handleSubmit = (e) => {
        e.preventDefault()
        addContractController(form)
            .then((res) => {
                if (res.status === 201) {
                    console.log("dung");
                    toast.success("Thêm hợp đồng thành công")
                }
            }).catch((error) => {
                toast.error("Thêm hợp đồng thất bại")
            })

    }


    const handleChangePropertyId = (e) => {
        const { value, name } = e.target

        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))
    }
    const handleChangeName = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangeDateOfBirth = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangeSSN = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangeAddress = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangePrice = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangeDeposit = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangeStatus = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangePhonenumber = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    const handleChangeRemain = (e) => {
        const { value, name } = e.target
        setForm(prevForm => (
            { ...prevForm, [name]: value }
        ))

    }
    return (
        <React.Fragment>

            <ToastContainer />
            <form className="container_contract">
                <div className="fullWidth">
                    <h5>Bất động sản</h5>
                    <select name="property_id" onChange={handleChangePropertyId}>
                        {options.map((option) => {
                            return (
                                <option key={option._id} value={option._id}>{`${option.property_code} - ${option.property_name}`}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <h5>Tên khách hàng</h5>
                    <input type="text" name="customer_name" onChange={handleChangeName} />
                </div>
                <div>
                    <h5>Năm sinh</h5>
                    <input type="date" name="yearofbirth" onChange={handleChangeDateOfBirth} />
                </div>
                <div>
                    <h5>CCCD</h5>
                    <input onChange={handleChangeSSN} type="text" name="ssn" />
                </div>
                <div>
                    <h5>Địa chỉ</h5>
                    <input type="text" name="customer_address" onChange={handleChangeAddress} />
                </div>
                <div>
                    <h5>Số điện thoại</h5>
                    <input type="text" name="mobile" onChange={handleChangePhonenumber} />
                </div>
                <div>
                    <h5>Giá tiền</h5>
                    <input type="number" name="price" onChange={handleChangePrice} />
                </div>
                <div>
                    <h5>Tiền cọc</h5>
                    <input type="number" name="deposit" onChange={handleChangeDeposit} />
                </div>
                <div>
                    <h5>Số tiền còn lại</h5>
                    <input type="number" name="remain" onChange={handleChangeRemain} />
                </div>
                <div>
                    <h5>Trạng thái</h5>
                    <select name="status" onChange={handleChangeStatus}>
                        <option value={0}>Chưa thanh toán</option>
                        <option value={1}>Đã thanh toán</option>
                    </select>
                </div>


                <div>
                    <button type="submit" onClick={handleSubmit}>Thêm</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Main