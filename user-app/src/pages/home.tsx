import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';


const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <Container>
            <Card>
                <CardBody>
                    <p>
                        Welcome to this page that is protected by Friebase auth!
                    </p>
                    <p>
                        Change your password <Link to="/change">here</Link>.
                    </p>
                    <p>
                        Click here <Link to='/logout'>here</Link> to logout.
                    </p>
                </CardBody>
            </Card>
        </Container>
    );
}





export const Overview: React.FunctionComponent<IPageProps> = () => {
    return <div className="overview">Overview</div>;
};

export const Users: React.FunctionComponent<IPageProps> = () => {
    return <div className="overview">Users</div>;
};

export const Revenue: React.FunctionComponent<IPageProps> = () => {
    return <div className="overview">Revenue</div>;
};

export const Order: React.FunctionComponent<IPageProps> = () => {
    return <div className="overview">Order</div>;
};

export const History: React.FunctionComponent<IPageProps> = () => {
    return <div className="overview">History</div>;
};

export const Configurations: React.FunctionComponent<IPageProps> = () => {
    return <div className="overview">Configurations</div>;
};

export default HomePage;

