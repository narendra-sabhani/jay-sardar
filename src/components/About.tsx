export function About() {
    return (
        <>
            <div className="about">
                <img src={process.env.PUBLIC_URL + "/img/hero-bg.jpg"} className="d-block w-100 img-responsive" alt="..." />
                <label className="h1 centered">About Us</label>
            </div>
            <div className="container w-50 text-center p-3">
                <label className="h1">
                    Building a Brighter <br /> Financial Future &<br /> Good Support.
                </label>
                <label className="w-100 pt-4">
                    Jay Sardar Consultancy (JSC) is a financial consulting firm based in Surendranagar, Gujarat.
                    JSC strives to provide its clients with helpful, simple, and cost-free financial services.
                    Our company works with a <b>number of reputable banks</b>.
                    We have a team of <b>highly specialized, experienced</b>, and <b>nimble personnel</b>.
                </label>
                <label className="pt-4">
                    Our firm provides consultancy services to a variety of clients, including farmers, consumers, business owners, and real estate agents.
                    We help drive <b>innovation</b>, <b>inclusion</b>, and <b>access</b> across industry.
                </label>
                <div className="pt-5 text-center">
                    <button type="button" className="btn btn-primary">Contact us</button>
                </div>
            </div>
        </>
    )
}