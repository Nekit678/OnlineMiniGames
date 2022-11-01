import { Avatar } from "antd";
import Card from "antd/lib/card/Card";
import Meta from "antd/lib/card/Meta";

type GameScoreProps = {
    count: number | null,
    player: string | null,
    description: string | null,
    avatar: string | null,

}

function GameScore(props: GameScoreProps) {
    return (
        <div className="site-card-border-less-wrapper w-fit">
            <Card title={<Meta
                avatar={<Avatar src={props.avatar} />}
                title={props.player}
                description={props.description}
            />} bordered={false}>
                <div className="text-center">
                    <span className=" text-5xl">{props.count}</span>
                </div>
            </Card>
        </div>
    )
}

export default GameScore;