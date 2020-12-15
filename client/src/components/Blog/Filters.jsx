import logo from "../../assets/Blog/logo.png";

const Filters = () => (
    <div className="Blog__filters content-container">
        <h1>I WANT TO READ ABOUT</h1>
        <ul>
            <li className="Blog__filter">
                <img alt="Filter Icon" src={logo} />
                <h1>Tips and Tricks</h1>
            </li>
            <li className="Blog__filter">
                <img alt="Filter Icon" src={logo} />
                <h1>Food waste facts</h1>
            </li>
            <li className="Blog__filter">
                <img alt="Filter Icon" src={logo} />
                <h1>Pikfud</h1>
            </li>
            <li className="Blog__filter">
                <img alt="Filter Icon" src={logo} />
                <h1>Latest news</h1>
            </li>
        </ul>
        <div className="d-flex justify-content-center w-100 mt-4">
            <input type="text" className="Blog__search" placeholder="Looking for something?" />
        </div>
    </div>
);

export default Filters;
