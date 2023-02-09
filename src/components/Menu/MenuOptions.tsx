import React from 'react'
import { Menu, Grid, MenuProps } from 'antd'
import {
    HomeOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    PercentageOutlined,
    FireOutlined
} from '@ant-design/icons';
import { navigate } from 'gatsby';

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Inicio', "home", <HomeOutlined />),
    getItem('Productos', "products", <ShoppingCartOutlined />),
    getItem('Ofertas', "sales", < PercentageOutlined />),
    getItem('Temporadas', "seasons", < FireOutlined />),
    getItem('Nosotros', "about", <UserOutlined />),
]

const MenuOptions = () => {
    const { md } = useBreakpoint();

    const handleClick: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case 'home':
                navigate("/")
                break;
            case 'about':
                navigate("/about")
                break;
            case 'products':
                navigate("/products")
                break;
            default:
                break;
        }
    }

    return (
        <Menu
            mode={md ? "inline" : "vertical"}
            items={items}
            onClick={handleClick}
            style={{ color: "#c94f6a", fontSize: "1.1rem", fontFamily: "Bebas Neue, serif" }}
        />
    )
}

export default MenuOptions