import { faBuilding, faCar, faCreditCard, faHouse, faListCheck, faPerson, faTractor } from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Card";

export function Home() {
    console.log("process.env.PUBLIC_URL",process.env.PUBLIC_URL)
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + "/img/slider-1.jpg"} className="d-block w-100" height={350} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/img/slider-2.jpg"} className="d-block w-100" height={350} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/img/slider-3.jpg"} className="d-block w-100" height={350} alt="..." />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="row pt-4 px-3">
                <div className="col-sm-4 pb-2">
                    <Card icon={faHouse} headerText="Home Loan" />
                </div>
                <div className="col-sm-4 pb-2">
                    <Card icon={faPerson} headerText="Commercial Shop & Industrial Purchase" />
                </div>
                <div className="col-sm-4 pb-2">
                    <Card icon={faBuilding} headerText="Mortgage loan" />
                </div>
            </div>
            <div className="row pt-4 px-3">
                <div className="col-sm-4 pb-2">
                    <Card icon={faTractor} headerText="Agriculture Loan" />
                </div>
                <div className="col-sm-4 pb-2">
                    <Card icon={faListCheck} headerText="Project Finance" />
                </div>
                <div className="col-sm-4 pb-2">
                    <Card icon={faBuilding} headerText="Real Estate" />
                </div>
            </div>
        </>
    )
}