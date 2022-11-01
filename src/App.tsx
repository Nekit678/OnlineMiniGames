import 'antd/dist/antd.min.css'
import { Layout } from 'antd';
import HeaderContainer from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import KNBGame from './components/KNBGame/KNBGame';
import { Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar></Navbar>
      <Layout className="site-layout">
        <HeaderContainer></HeaderContainer>
        <Content className=' bg-gray-300'>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/KNB' element={<KNBGame/>}/>
            <Route path="/GTN"/>
            {/* <GameScore avatar={"https://abrakadabra.fun/uploads/posts/2021-12/1640318109_8-abrakadabra-fun-p-beskonechnoe-leto-avatarki-8.jpg"}
          count={10} player="JustLena" description={"Ваш противник"}></GameScore> */}
            {/* <SelectMode></SelectMode> */}
          </Routes>
        </Content>
        <Footer className='text-center'>OnlineMiniGames ©2022 Created by JustLena</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
