import "./Search.scss"

const Search = () => {
    return (
        <div className="container">
            <div>
                <p>Các loại bất động sản khác nhau</p>
            </div>
            <div className="search_place">
                <input type="text" className="input_search" />
                <button type="submit">Tìm kiếm</button>
            </div>
            <div className="icons">
                <span>
                    <img src="../../asset/image 1.png"></img>
                </span>
                <span>
                    <img src="../../asset/image 3.png"></img>
                </span>
                <span>
                    <img src="../../asset/image 4.png"></img>
                </span>
                <span>
                    <img src="../../asset/image 12.png"></img>
                </span>
            </div>
        </div>
    )
}

export default Search