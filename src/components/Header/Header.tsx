import {Layout} from 'antd';
const { Header} = Layout;

function HeaderContainer() {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className=' text-center'>
                <span className='text-white font-sans font-bold text-2xl'>OnlineMiniGames</span>
            </div>
        </Header>
    )
}

export default HeaderContainer;