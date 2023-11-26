import "./Main.scss"
import React from "react"

const Main = (props) => {
    const { data } = props
    return (
        <React.Fragment>
            <div className="container_main">
                <div className="card_list">
                    {
                        data.map((item) => {
                            return (
                                <div className="card">
                                    <div>
                                        <h2>Mã hợp đồng: {item.fullcontract_code}</h2>
                                    </div>
                                    <div>
                                        <p>Khách hàng: {item.customer_name}</p>
                                        <p>Địa chỉ: {item.customer_address}</p>
                                        <p>Số điện thoại: {item.mobile}</p>
                                        <p>Mã bất động sản: {item.property_id ? item.property_id?.property_code : "Không có"}</p>
                                        <p>Giá hợp đồng: {item.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="footer">
                    <h3>Xem Thêm</h3>
                </div>

            </div>

        </React.Fragment>
    )
}

export default Main