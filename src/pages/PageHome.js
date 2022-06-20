import "../css/PageHome.css";

import Button from "../components/Button";

export default function PageHome() {
    const quotes = [
        "The best API for things axolotl related."
    ]

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    function handleGetStarted(e) {
        e.preventDefault();
        window.location.href = "/login";
    }

    return (
        <div id="page-home">
            <div className="header">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" className="logo" />
                <h1>Axolotl API</h1>
                <h2>{quote}</h2>

                <Button onClick={handleGetStarted}>Get Started</Button>
            </div>
        </div>
    );
}