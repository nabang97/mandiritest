import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import memoize from 'memoize-one';
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Header from "./header";
import { useNavigate} from 'react-router-dom';
import { selectOptions } from "@testing-library/user-event/dist/select-options";

// ** Styles
// import '@styles/react/libs/tables/react-dataTable-component.scss'


const MainContent = () => {
    const [dataInput, setDataInput] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [dataList, setDataList] = useState();
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://api.coinpaprika.com/v1/coins').then(response => setDataInput(response.data));
    }, [])

    useEffect(() => {
        console.log('DATA INPUT ',dataInput);
        if (dataInput.length > 0) {
            setIsLoading(false);
        }        
    }, [dataInput])

    const columns = memoize((handleDetail) => [  
        {
            name: 'ID',
            selector: 'id',
            sortable: true,
            cell : (row) => {
                return <a href={'/detail/'+row.id} onClick={() => handleDetail(row)}>{row.id}</a>
            }
         },
        {
          name: 'Nama',
          selector: 'name',
          sortable: true,
          
          // minWidth: '250px',
        },
        {
            name: 'Symbol',
            selector: 'symbol',
            sortable: true,
            // minWidth: '250px',
          },
          {
            name: 'Type',
            selector: 'type',
            sortable: true,
            // minWidth: '250px',
          },
          {
            name: 'Active',
            selector: 'is_active',
            sortable: true,
            cell : (row) => {
                console.log(row.is_active);
                return <p>{row.is_active}</p>
            }
          },
          {
            name: 'Delete',
            selector: 'type',
            // minWidth: '250px'
            cell: () => {
                return <button className="btn btn-danger">Delete</button>;
            }
          }
        
      ])

      const handleDetail = rowData => {
        
        navigate('/detail/'+rowData.id, {state : rowData});
      }

    

      const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                backgroundColor: '#3783c6',
                color:'white'
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    return (<Row >
        <Col style={{margin:'0px 100px',padding: '0px 15px'}}>
            
            <Card style={{margin: '100px', padding: '20px 50px', borderRadius: '10px'}}>
                <Row>
                    <Col md="12"><h5 style={{textAlign: 'left'}}>Coin List</h5><br></br></Col>
                   
                 </Row>
                 <Row>
                 <DataTable 
                    style={{}}
                    // noTableHead
                    responsive={false}
                    noHeader
                    pagination
                    progressPending={isLoading}
                    columns={columns(handleDetail)}
                    data={dataInput}
                    customStyles={customStyles}
                    />
                 </Row>
            </Card>
        </Col>
        </Row>
    )
}

export default MainContent;
