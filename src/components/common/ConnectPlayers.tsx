import { Button, Col, Input, Row } from "antd"
import { useState } from 'react';

function ConnectPlayers() {
    const [loading, setLoading] = useState(false)
    const [textButton, setTextButton] = useState("Создать игру")

    function onClick() {
        setLoading(true)
        setTextButton("Ждем подключения игрока")
    }

    return (
            <Row gutter={[0,0]}>
                <Col span={6}>
                    <Button loading={loading} type="primary" onClick={onClick}>{textButton}</Button>
                    <div>Номер созданной игры: 3</div>
                </Col>
                <Col span={6}>
                    <div className=" w-44">
                        <Input ></Input>
                    </div>
                    <Button type="ghost">Присоединится к игре</Button>
                </Col>
            </Row>
    )

}

export default ConnectPlayers