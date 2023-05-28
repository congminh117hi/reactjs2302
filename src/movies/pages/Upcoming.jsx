import React from "react";
import { Row, Col } from "antd";
import LayoutMovies from '../components/Layout'

const UpcomingMovies = () => {
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim sap chieu"
        >
            <Row>
                <Col span={24}>
                    <h4>Phim sap trinh chieu</h4>
                </Col>
            </Row>
        </LayoutMovies>
    )
}
export default React.memo(UpcomingMovies)