import 'antd/dist/antd.min.css'
import { Layout } from 'antd';
import HeaderContainer from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import KNBGame from './components/KNBGame/KNBGame';
import { Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import GTNGame from './components/GTNGame/GTNGame';
import CustomCard from './components/common/CustomCard';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh'}}>
      {/* <Navbar></Navbar> */}
      <Layout className="site-layout">
        <HeaderContainer></HeaderContainer>
        <Content className='m-5'>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/KNB/*' element={<KNBGame/>}/>
            <Route path="/GTN/*" element={<GTNGame/>}/>
          </Routes>
        </Content>
        <Footer className='text-center'>OnlineMiniGames ©2022 Created by JustLena</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
