import { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const Detail = () => {
    let {id} = useParams();
    const location = useLocation()

    useEffect(() => {
        console.log(location);
    }, [])
    
    return (<Card style={{margin: '100px', padding: '20px 50px', borderRadius: '10px',  textAlign: 'left'}}>
                <Row>
                    <Col>
                    <h5 style={{color: '#2569a5'}}>Coins Detail</h5><br></br>
                    <table style={{width: '50%'}} className="tableDetail">
                        <tr>
                            <td>ID</td>
                            <td className='bold'>{id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td className='bold'>{location.state.name}</td>
                        </tr>
                        <tr>
                            <td>Symbol</td>
                            <td className='bold'>{location.state.symbol}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td className='bold'>{location.state.type}</td>
                        </tr>
                        <tr>
                            <td>Is Active</td>
                            <td className='bold'>{location.state.is_active}</td>
                        </tr>
                        <tr>
                            <td>is New?</td>
                            <td className='bold'>{location.state.is_new}</td>
                        </tr>
                    </table>
                    </Col>
                    </Row>
            </Card>)
}

export default Detail;
