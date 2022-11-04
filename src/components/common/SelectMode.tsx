import { Card, Col, Grid, Row } from "antd"
import CustomCard from "./CustomCard"
import { useNavigate } from 'react-router-dom';

function SelectMode() {
    const navigate = useNavigate()
    return (
        <Row gutter={50}>
            <Col>
                <CustomCard title="Режим ИИ" image="https://cdn-icons-png.flaticon.com/512/1173/1173049.png" onClick={() => navigate("")}></CustomCard>
            </Col>
            <Col>
                <CustomCard title="Режим PvP" image="https://cdn.iconscout.com/icon/premium/png-256-thumb/versus-4547882-3762623.png" onClick={() => navigate("")}></CustomCard>
            </Col>
        </Row>
    )
}

export default SelectMode