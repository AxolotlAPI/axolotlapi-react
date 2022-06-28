import "../css/PageHome.css";

import Grid from "../components/grid/Grid";
import Row from "../components/grid/Row";
import Column from "../components/grid/Column";

import Card from "../components/card/Card";

import Button from "../components/Button";

export default function PageHome() {
    const quotes = [
        "The best API for things axolotl related."
    ]

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    function handleGetStarted(e) {
        e.preventDefault();
        window.location.href = "/dashboard";
    }

    return (
        <div id="page-home">
            <div className="header">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" className="logo" />
                <h1>Axolotl API</h1>
                <h2>{quote}</h2>

                <Button onClick={handleGetStarted}>Get Started</Button>
            </div>

            <Grid>
                <Row>
                    <h1>/api/user</h1>
                </Row>
                <Row>
                    <Column>
                        <Card title="/login">
                            
                        </Card>
                    </Column>

                    <Column>
                        <Card title="/register">
                            
                        </Card>
                    </Column>

                    <Column>
                        <Card title="/me">
                            
                        </Card>
                    </Column>
                </Row>

                <Row>
                    <h1>/api/axolotl-fact</h1>
                </Row>
                <Row>
                    <Column>
                        <Card title="/">

                        </Card>
                    </Column>

                    <Column>
                        <Card title="/mine">

                        </Card>
                    </Column>

                    <Column>
                        <Card title="/curated">

                        </Card>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Card title="/">

                        </Card>
                    </Column>

                    <Column>
                        <Card title="/report">

                        </Card>
                    </Column>
                </Row>

                <Row>
                    <h1>/api/axolotl-picture</h1>
                </Row>
                <Row>
                    <Column>
                        <Card title="/gary-the-axolotl">

                        </Card>
                    </Column>

                    <Column>
                        <Card title="/">

                        </Card>
                    </Column>

                    <Column>
                        <Card title="/mine">

                        </Card>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Card title="/curated">

                        </Card>
                    </Column>

                    <Column>
                        <Card title="/">

                        </Card>
                    </Column>

                    <Column>
                        <Card title="/report">

                        </Card>
                    </Column>
                </Row>
            </Grid>
        </div>
    );
}