import React, {useState, useEffect} from "react";
import { Row, Col, Image, Skeleton } from "antd";
import LayoutMovies from '../components/Layout'
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { helpers } from "../helpers";

const DetailMovies = () => {
    const {slug, id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await api.getDataMoviesById(id);
            if(helpers.isEmptyObject(data)){
                // ko co du lieu theo id
                setError({
                    cod: 404,
                    mess: "Not found data"
                })
            }else{
                // co du lieu theo id
                setMovie(data);
                setError(null);
            }
            setLoading(false); //hoan thanh
        }
        getData();
    }, [id]); // id ma thay doi thi useEffect se tu dong chay lai

    if(loading){
        return(
            <LayoutMovies
            level1="Trang chu"
            level2="Chi tiet"
            level3={slug}
            >
            <Row>
                <Col span={24}>
                    <Skeleton active />
                </Col>
            </Row>
            </LayoutMovies>
        )
    }

    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Chi tiet"
            level3={slug}
        >
            <Row>
                <Col span={24}>
                    <h4>Chi tiet bo phim</h4>
                    <Row>
                        <Col span={8}>
                           <div style={{padding: '10px'}}>
                                <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                                <p>{movie.original_title}</p>
                            </div> 
                        </Col>
                        <Col span={16} style={{padding: '10px'}}>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(DetailMovies)