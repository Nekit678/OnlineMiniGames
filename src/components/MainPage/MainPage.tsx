import CustomCard from './../common/CustomCard';
import { Button, Space, Typography } from 'antd';
import { Row } from 'antd';
import { Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SelectMode from './../common/SelectMode';
const { Title } = Typography;

function MainPage() {
    const navigate = useNavigate()
    const [game, setGame] = useState("")
    const [mode, setMode] = useState("")

    return (
        <div className=' flex justify-center'>
            {!game ?
                <div>
                    <Title italic className=' text-center'>Выбери игру!</Title>
                    <Row gutter={[20, 20]}>
                        <Col>
                            <CustomCard title="Крестики-нолики" image="https://cdn-icons-png.flaticon.com/512/1173/1173049.png" onClick={() => setGame("XZ")} />
                        </Col>
                        <Col>
                            <CustomCard title="К-Н-Б" image="https://cdn-icons-png.flaticon.com/512/1173/1173049.png" onClick={() => setGame("KNB")} />
                        </Col>
                        <Col>
                            <CustomCard title="Угадай число" image="https://cdn-icons-png.flaticon.com/512/1173/1173049.png" onClick={() => setGame("GTN")} />
                        </Col>
                    </Row>
                </div> :
                <Space direction='vertical' align='center'>
                    <Title italic className=' text-center'>Выбери режим!</Title>
                    <SelectMode></SelectMode>
                    <Button type='primary' onClick={() => setGame("")}>Выбрать другую игру</Button>
                </Space>
            }

        </div>
    )
}


export default MainPage