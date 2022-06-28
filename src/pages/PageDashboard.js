import Grid from "../components/grid/Grid";
import Row from "../components/grid/Row";
import Column from "../components/grid/Column";

import Card from "../components/card/Card";

export default function PageDashboard() {
    if (localStorage.getItem("accessToken") === null) {
        window.location.href = "/login";
        return <></>;
    }

    return (
        <Grid>
            <Row>
                <Column>
                    <Card title="My facts">
                        You currently have 0 uploaded facts.
                    </Card>
                </Column>
                <Column>
                    <Card title="My pictures">
                    You currently have 0 uploaded pictures.
                    </Card>
                </Column>
            </Row>
        </Grid>
    );
}