import React from "react";
import { Row, Col } from "antd";
import LayoutMovies from '../components/Layout'

const HomeMovies = () => {
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim xem nhieu"
        >
            <Row>
                <Col span={24}>
                    <h4>Day la trang chu</h4>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(HomeMovies)