import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";
import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <Layout>
            <NavLink to="/">
                <Button label="Главная страница" />
            </NavLink>
            <NavLink to="/">
                <Button label="Страница услуг" />
            </NavLink>
        </Layout>
    )
}

export default Menu;