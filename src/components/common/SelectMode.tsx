import { Card, Col, Grid, Row } from "antd"


function SelectMode() {
    return (
        <div>
            <Row gutter={50}>
                <Col>
                    <div className="site-card-border-less-wrapper w-fit">
                        <Card title={"Режим ИИ"} hoverable>
                            <img className="w-44" src="https://cdn-icons-png.flaticon.com/512/1173/1173049.png"></img>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="site-card-border-less-wrapper w-fit">
                        <Card title={"Режим PvP"} hoverable>
                            <img className="w-44" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/versus-4547882-3762623.png"></img>
                        </Card>
                    </div>
                </Col>
            </Row>


        </div>
    )
}

export default SelectMode