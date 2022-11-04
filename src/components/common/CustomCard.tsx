import { Card } from 'antd';

type CustomCardProps = {
    title: string | null
    onClick: Function
    image: string
}

function CustomCard(props: CustomCardProps) {
    return (
        <div className="site-card-border-less-wrapper w-fit">
            <Card title={props.title} hoverable onClick={() => props.onClick()}>
                {props.image?<img className="w-44" src={props.image}></img>:<></>}
            </Card>
        </div>
    )
}

export default CustomCard