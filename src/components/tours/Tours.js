import Tour from './tour/Tour'
import Row from 'react-bootstrap/Row';
import './Tours.css'
const data = require('../../data/db.json')

function Tours() {
    return (
        <>
            <h2 className='txt'>Select Your Destination</h2>
            <Row xs={1} md={2} className="g-4">
            {data.map((item)=>{
                return (
                    <Tour key={item.id} tour={item} />
                )
            })}
            </Row>
        </>
    )
}
export default Tours;

