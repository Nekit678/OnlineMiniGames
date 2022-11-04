import { useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate, useMatch } from 'react-router-dom';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];
const { Sider } = Layout;

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Главная страница', '/', <PieChartOutlined />),
    getItem('К-Н-Б', '/KNB', <PieChartOutlined />),
    getItem('Угадай число', '/GTN', <DesktopOutlined />),
    getItem('Крестики-нолики', '/XZ', <UserOutlined />),
];

function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const defKey = useMatch("/*")

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <div className="logo" />
            <Menu onClick={({ key }) => navigate(key)} theme="dark" defaultSelectedKeys={[defKey?.pathname || ""]} mode="inline" items={items} />
        </Sider>
    )
}

export default Navbar;