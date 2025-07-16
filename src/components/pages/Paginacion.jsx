import Pagination from 'react-bootstrap/Pagination';
import { useNavigate } from "react-router";

const Paginacion = () => {

    const navegacion = useNavigate();

    return (
        <Pagination>
      <Pagination.Prev onClick={()=>navegacion('*')}/>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item onClick={()=>navegacion('*')}>{2}</Pagination.Item>
      <Pagination.Item onClick={()=>navegacion('*')}>{3}</Pagination.Item>
      <Pagination.Next onClick={()=>navegacion('*')} />
    </Pagination>
    );
};

export default Paginacion;